import loginRouter from "./login.routes";
import userRouter from "./user.routes";
import {Router} from "express"

const router = Router();

router.use('/users', userRouter)
router.use('/login', loginRouter)

export default router;