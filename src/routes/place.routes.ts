// Import necessary modules and controllers
import { Router } from 'express';
import { getAll, create, update, getByName } from '../controllers/place.controller';

const placeRouter = Router();

// Define API routes
placeRouter.route('/')
  .get(getAll)
  .post(create);

placeRouter.route('/:id')
  .get(getByName)
  .put(update)
  .delete();

export default placeRouter;