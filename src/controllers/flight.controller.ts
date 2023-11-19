import { Request, Response } from 'express';
import Flight from '../models/flight.model';
import Country from '../models/country.model';

type ControllerCrudFunction = (req: Request, res: Response) => void;

/**
 * @description Obtener todos los registros
 */
export const getAll: ControllerCrudFunction = async (_, res) => {
  try {
    const response = await Flight.findAll();
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
    const response = await Flight.findByPk(id);
    if (response) {
      return res.json(response);
    } else {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener el registro' });
  }
}

export const findFlights: ControllerCrudFunction = async (req, res) => {
  const { origin,
    destination,
    dates,
    number } = req.body;

  try {
    const orgCountry = await Country.findOne({ where: { name: origin } })
    if (!orgCountry) return res.status(404).json({ message: "no orgCountry" })
    const orId = orgCountry.id
    const desCountry = await Country.findOne({ where: { name: destination } })
    if (!desCountry) return res.status(404).json({ message: "no desCountry" })
    const deId = desCountry.id
    const matchedFlights = await Flight.findAll({
      where: {
        originId: orId,
        destinationId: deId,
      }
    })
    if (!matchedFlights) return res.status(404).json({ message: "there are no flights for this places" })
    res.json(matchedFlights)
  } catch (error) {
    res.json(error)
  }
}

/**
 * @description Crear un nuevo registro
 */
export const create: ControllerCrudFunction = async (req, res) => {
  const sentData = req.body;

  try {
    const response = await Flight.create(sentData);
    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear el registro' });
  }
}

/**
 * @description Actualizar un registro por ID
 */
export const update: ControllerCrudFunction = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const [rowsUpdated] = await Flight.update(data, { where: { id } });
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
    const rowsDeleted = await Flight.destroy({ where: { id } });
    if (rowsDeleted === 1) {
      return res.json({ message: 'Registro eliminado correctamente' });
    } else {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar el registro' });
  }
}