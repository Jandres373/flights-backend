// Import necessary modules and controllers
import { Router } from 'express';
import { getAll, create, update, findFlights } from '../controllers/flight.controller';

const flightRouter = Router();

// Define API routes
flightRouter.route('/')
  .get(getAll)
  .post(create);

flightRouter.route('/findFlight')
  .post(findFlights)

flightRouter.route('/:id')
  .put(update)
  .delete();

export default flightRouter;