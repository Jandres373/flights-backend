"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.DATABASE || !process.env.USER || !process.env.PASSWORD || !process.env.HOST || !process.env.PORT) {
    throw new Error('Faltan variables de entorno requeridas');
}
const DATABASE = process.env.DATABASE;
const USERNAME = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const PORT = parseInt(process.env.PORT) || 5432;
const sequelize = new sequelize_1.Sequelize({
    database: DATABASE,
    username: USERNAME,
    password: PASSWORD,
    host: HOST,
    port: PORT,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
exports.default = sequelize;
