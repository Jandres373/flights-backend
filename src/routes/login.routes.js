"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controllers/login.controller");
const loginRouter = (0, express_1.Router)();
loginRouter.route('/')
    .post(login_controller_1.loginUser);
exports.default = loginRouter;
