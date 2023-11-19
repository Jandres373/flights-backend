import { Request, Response } from 'express';
import Stay from '../models/stay.model';

type ControllerCrudFunction = (req: Request, res: Response) => void;

/**
 * @description Obtener todas las estancias
 */
export const getAll: ControllerCrudFunction = async (_, res) => {
  try {
    const response = await Stay.findAll();
    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener las estancias' });
  }
}

/**
 * @description Obtener una estancia por ID
 */
export const getOne: ControllerCrudFunction = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await Stay.findByPk(id);
    if (response) {
      return res.json(response);
    } else {
      return res.status(404).json({ error: 'Estancia no encontrada' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener la estancia' });
  }
}

/**
 * @description Crear una nueva estancia
 */
export const create: ControllerCrudFunction = async (req, res) => {
  const sentData = req.body;

  try {
    const response = await Stay.create(sentData);
    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear la estancia' });
  }
}

/**
 * @description Actualizar una estancia por ID
 */
export const update: ControllerCrudFunction = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const [rowsUpdated] = await Stay.update(data, { where: { id } });
    if (rowsUpdated === 1) {
      return res.json({ message: 'Estancia actualizada correctamente' });
    } else {
      return res.status(404).json({ error: 'Estancia no encontrada' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar la estancia' });
  }
}

/**
 * @description Eliminar una estancia por ID
 */
export const remove: ControllerCrudFunction = async (req, res) => {
  const { id } = req.params;

  try {
    const rowsDeleted = await Stay.destroy({ where: { id } });
    if (rowsDeleted === 1) {
      return res.json({ message: 'Estancia eliminada correctamente' });
    } else {
      return res.status(404).json({ error: 'Estancia no encontrada' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar la estancia' });
  }
}
