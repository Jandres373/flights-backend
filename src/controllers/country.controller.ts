import { Request, Response } from 'express';
import Country from '../models/country.model';
import Place from '../models/place.model';
import Stay from '../models/stay.model';
import { determineStatusCode } from '../utils/determineError';

type ControllerCrudFunction = (req: Request, res: Response) => void;

/**
 * @description Obtener todos los registros
 */
export const getAll: ControllerCrudFunction = async (_, res) => {
  try {
    const response = await Country.findAll();
    return res.json(response);
  } catch (error: any) {
    const erStatus = determineStatusCode(error)
    return res.status(erStatus).json({ error: `Error al obtener los registros: ${error.message}` });
  }
}

/**
 * @description Obtener un registro por ID
 */
export const getOne: ControllerCrudFunction = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await Country.findByPk(id);
    if (response) {
      return res.json(response);
    } else {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
  } catch (error: any) {
    const erStatus = determineStatusCode(error)
    return res.status(erStatus).json({ error: `Error al obtener el registro: ${error.message}` });
  }
}

export const getCountryPlaces: ControllerCrudFunction = async (req, res) => {
  const { name } = req.body
  try {
    const countryPlaces = await Country.findAll({ where: { name }, include: [Place] })
    return res.status(200).json(countryPlaces)
  } catch (error:any) {
    const erStatus = determineStatusCode(error)
    return res.status(erStatus).json({error: `Error al obtener country y place: ${error.message}`})
  }
}
/**
 * @description Crear un nuevo registro
 */
export const create: ControllerCrudFunction = async (req, res) => {
  const sentData = req.body;

  try {
    const response = await Country.create(sentData);
    return res.status(201).json(response);
  } catch (error: any) {
    const erStatus = determineStatusCode(error)
    return res.status(erStatus).json({ error: `Error al crear el registro: ${error.message}` });
  }
}

/**
 * @description Actualizar un registro por ID
 */
export const update: ControllerCrudFunction = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const [rowsUpdated] = await Country.update(data, { where: { id } });
    if (rowsUpdated === 1) {
      return res.json({ message: 'Registro actualizado correctamente' });
    } else {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
  } catch (error: any) {
    const erStatus = determineStatusCode(error)
    return res.status(erStatus).json({ error: `Error al actualizar el registro: ${error.message}` });
  }
}

/**
 * @description Eliminar un registro por ID
 */
export const remove: ControllerCrudFunction = async (req, res) => {
  const { id } = req.params;

  try {
    const rowsDeleted = await Country.destroy({ where: { id } });
    if (rowsDeleted === 1) {
      return res.json({ message: 'Registro eliminado correctamente' });
    } else {
      return res.status(204).json({ error: 'Registro no encontrado' });
    }
  } catch (error: any) {
    const erStatus = determineStatusCode(error)
    return res.status(erStatus).json({ error: `Error al eliminar el registro: ${error.message}` });
  }
}