import { Request, Response } from 'express';
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import sendEmail from '../utils/sendEmail'
import EmailCode from '../models/emailCode.model';
import PasswordCode from '../models/passwordCode.model';

type ControllerCrudFunction = (req: Request, res: Response) => void;

/**
 * @description Obtener todos los registros
 */
export const getAll: ControllerCrudFunction = async (_, res) => {
  try {
    const response = await User.findAll();
    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener los registros' });
  }
}

/**
 * @description Obtener un registro por ID
 */
export const getOne: ControllerCrudFunction = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await User.findByPk(id);
    if (response) {
      return res.json(response);
    } else {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener el registro' });
  }
}

export const getMe: ControllerCrudFunction = async (req, res) => {
  const loggedUser = req.user
  try {
    const user = await User.findByPk(loggedUser.id)
    res.json(user)
  } catch (error) {
    res.json({ message: error })
  }
}

export const getCode: ControllerCrudFunction = async (req, res) => {
  const { code } = req.params

  try {

    const codeInDB = await EmailCode.findOne({ where: { code } });

    if (!codeInDB) return res.status(401).json({ message: "incorrect code" })

    const user = await User.findByPk(codeInDB.userId)
    if (!user) return res.status(401).json({ message: "error" })

    user.update({ isVerified: true })
    await EmailCode.destroy({ where: { id: codeInDB.id } })
    res.json({ message: 'user verified' })

  } catch (error) {

    res.status(400).json(error)
  }
}

/**
 * @description Crear un nuevo registro
 */
export const create: ControllerCrudFunction = async (req, res) => {
  const { password, email } = req.body
  const sentData = req.body;
  const encoded = await bcrypt.hash(password, 10)

  try {
    const response = await User.create({ ...sentData, password: encoded });
    const verCode = require('crypto').randomBytes(32).toString('hex')
    await sendEmail({
      to: `${email}`, // Email del receptor
      subject: "Verification", // asunto
      text: `Please, access the following link to activate and verify your account. ${sentData.frontBaseUrl}/auth/verify/${verCode}` // texto
    })
    const createdCode = await EmailCode.create({ code: verCode, userId: response.id })
    return res.json({ response, createdCode });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export const resetPassword: ControllerCrudFunction = async (req, res) => {
  const { email, frontBaseUrl } = req.body;
  const user = await User.findOne({ where: { email } })
  if (!user) return res.status(401)

  const code = require('crypto').randomBytes(32).toString('hex')
  sendEmail({
    to: `${email}`, // Email del receptor
    subject: "Reset password", // asunto
    text: `Please, access the following link to reset your password. ${frontBaseUrl}/auth/reset_password/${code}` // texto
  })
  const id = user.id
  await PasswordCode.create({ userId: id, code })
}

export const verifyPassword: ControllerCrudFunction = async (req, res) => {

  try {
    const { password } = req.body;
    const { code } = req.params;
    const verifiedCode = await EmailCode.findOne({ where: { code } })
    if (!verifiedCode) return res.status(404)
    const encripted = await bcrypt.hash(password, 10)
    const newUser = {
      password: encripted
    }
    const response = await User.update(newUser, { where: { id: verifiedCode.userId } })
    res.json(response)
    await EmailCode.destroy({ where: { id: verifiedCode.id } })
  } catch (error) {
    res.json(error)
  }

}
/**
 * @description Actualizar un registro por ID
 */
export const update: ControllerCrudFunction = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const [rowsUpdated] = await User.update(data, { where: { id } });
    if (rowsUpdated === 1) {
      return res.json({ message: 'Registro actualizado correctamente' });
    } else {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar el registro' });
  }
}

/**
 * @description Eliminar un registro por ID
 */
export const remove: ControllerCrudFunction = async (req, res) => {
  const { id } = req.params;

  try {
    const rowsDeleted = await User.destroy({ where: { id } });
    if (rowsDeleted === 1) {
      return res.json({ message: 'Registro eliminado correctamente' });
    } else {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar el registro' });
  }
}

User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  delete values.password; // Excluye la contraseña
  return values;
};
