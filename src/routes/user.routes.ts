import { create, getAll, getCode, getMe, getOne, remove, resetPassword, update, verifyPassword } from "../controllers/user.controller";
import { Router } from "express"
import { verifyJWT } from "../middlewares/verifyJWT";

const userRouter = Router()

userRouter.route('/')
  .get(verifyJWT, getAll)
  .post(create)

userRouter.route('/me')
  .get(verifyJWT, getMe)

userRouter.route('/reset_password')
  .post(resetPassword)

userRouter.route('/reset_password/:code')
  .post(verifyPassword)

userRouter.route('/verify/:code')
  .get(getCode)

userRouter.route('/:id')
  .get(verifyJWT, getOne)
  .put(verifyJWT, update)
  .delete(verifyJWT, remove)

export default userRouter;