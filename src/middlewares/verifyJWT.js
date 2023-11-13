"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const verifyJWT = (req, res, next) => {
    const privateKey = process.env.TOKEN_SECRET || ' ';
    const authHeader = req.headers.authorization;
    if (!(authHeader === null || authHeader === void 0 ? void 0 : authHeader.startsWith('Bearer ')))
        return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    jsonwebtoken_1.default.verify(token, privateKey, (err, decoded) => {
        if (err)
            return res.sendStatus(403);
        // Accede a las propiedades del usuario a través de req.user
        if (decoded) {
            req.user = decoded.user;
        }
        next();
    });
};
exports.verifyJWT = verifyJWT;
