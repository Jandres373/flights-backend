"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const express_1 = require("express");
const verifyJWT_1 = require("../middlewares/verifyJWT");
const userRouter = (0, express_1.Router)();
userRouter.route('/')
    .get(verifyJWT_1.verifyJWT, user_controller_1.getAll)
    .post(user_controller_1.create);
userRouter.route('/me')
    .get(verifyJWT_1.verifyJWT, user_controller_1.getMe);
userRouter.route('/reset_password')
    .post(user_controller_1.resetPassword);
userRouter.route('/reset_password/:code')
    .post(user_controller_1.verifyPassword);
userRouter.route('/verify/:code')
    .get(user_controller_1.getCode);
userRouter.route('/:id')
    .get(verifyJWT_1.verifyJWT, user_controller_1.getOne)
    .put(verifyJWT_1.verifyJWT, user_controller_1.update)
    .delete(verifyJWT_1.verifyJWT, user_controller_1.remove);
exports.default = userRouter;
