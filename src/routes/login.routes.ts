import { Router } from 'express'
import { loginUser } from '../controllers/login.controller';

const loginRouter = Router();

loginRouter.route('/')
  .post(loginUser)

export default loginRouter;