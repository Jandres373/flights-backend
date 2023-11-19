// Import necessary modules and controllers
import { Router } from 'express';
import { getAll, create, update, remove, getOne, getCountryPlaces } from '../controllers/country.controller';

const countryRouter = Router();

// Define API routes
countryRouter.route('/')
  .get(getAll)
  .post(create);

countryRouter.route('/places')
  .post(getCountryPlaces)

countryRouter.route('/:id')
  .get(getOne)
  .put(update)
  .delete(remove);

export default countryRouter;