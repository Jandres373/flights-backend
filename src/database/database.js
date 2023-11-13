"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DATABASE = process.env.DATABASE;
const USERNAME = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const sequelize = new sequelize_1.Sequelize({
    database: DATABASE,
    username: USERNAME,
    password: PASSWORD,
    host: HOST,
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
exports.default = sequelize;
