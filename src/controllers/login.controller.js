"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const loginUser = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(401).json({ message: "Please enter the requested information" });
        const privateKey = process.env.TOKEN_SECRET || "";
        const signOptions = {
            expiresIn: '1d',
            algorithm: 'HS256', // type of signature
        };
        const user = yield user_model_1.default.findOne({ where: { email } });
        if (!user)
            return res.status(401).json({ message: "user not found" });
        const validated = yield bcrypt_1.default.compare(password, user.password);
        if (!validated)
            return res.status(401).json({ message: "incorrect password" });
        if (!user.isVerified)
            return res.status(401).json({ message: "Not verified" });
        const token = yield jsonwebtoken_1.default.sign({ user }, privateKey, signOptions);
        return res.json({ user, token });
    });
};
exports.loginUser = loginUser;
