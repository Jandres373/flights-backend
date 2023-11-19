// Import necessary modules and controllers
import { Router } from 'express';
import { getAll, create, update } from '../controllers/stay.controller';

const stayRouter = Router();

// Define API routes
stayRouter.route('/')
  .get(getAll)
  .post(create);

stayRouter.route('/:id')
  .put(update)
  .delete();

export default stayRouter;