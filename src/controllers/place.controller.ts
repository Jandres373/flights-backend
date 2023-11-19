import { Request, Response } from 'express';
import Place from '../models/place.model';
import Stay from '../models/stay.model';

type ControllerCrudFunction = (req: Request, res: Response) => void;

/**
 * @description Obtener todos los lugares
 */
export const getAll: ControllerCrudFunction = async (_, res) => {
  try {
    const response = await Place.findAll();
    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener los lugares' });
  }
}

/**
 * @description Obtener un lugar por ID
 */
export const getOne: ControllerCrudFunction = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await Place.findByPk(id);
    if (response) {
      return res.json(response);
    } else {
      return res.status(404).json({ error: 'Lugar no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener el lugar' });
  }
}

export const getByName: ControllerCrudFunction = async (req, res) => {
  const {id: name} = req.params;
  

  try {
    const place = await Place.findOne({ where: { name }, include: [Stay] });
    return res.status(200).json(place)

  } catch (error) {
    return res.status(500).json({ error: `Error al obtener el lugar ${error}` });
  }
}
/**
 * @description Crear un nuevo lugar
 */
export const create: ControllerCrudFunction = async (req, res) => {
  const sentData = req.body;

  try {
    const response = await Place.create(sentData);
    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear el lugar' });
  }
}

/**
 * @description Actualizar un lugar por ID
 */
export const update: ControllerCrudFunction = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const [rowsUpdated] = await Place.update(data, { where: { id } });
    if (rowsUpdated === 1) {
      return res.json({ message: 'Lugar actualizado correctamente' });
    } else {
      return res.status(404).json({ error: 'Lugar no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar el lugar' });
  }
}

/**
 * @description Eliminar un lugar por ID
 */
export const remove: ControllerCrudFunction = async (req, res) => {
  const { id } = req.params;

  try {
    const rowsDeleted = await Place.destroy({ where: { id } });
    if (rowsDeleted === 1) {
      return res.json({ message: 'Lugar eliminado correctamente' });
    } else {
      return res.status(404).json({ error: 'Lugar no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar el lugar' });
  }
}
