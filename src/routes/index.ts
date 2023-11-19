import countryRouter from "./country.routes";
import flightRouter from "./flight.routes";
import loginRouter from "./login.routes";
import placeRouter from "./place.routes";
import stayRouter from "./stay.routes";
import userRouter from "./user.routes";
import {Router} from "express"

const router = Router();

router.use('/login', loginRouter)
router.use('/users', userRouter)
router.use('/flights', flightRouter)
router.use('/stays', stayRouter)
router.use('/places', placeRouter)
router.use('/countries', countryRouter)

export default router;