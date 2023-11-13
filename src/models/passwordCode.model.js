"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules and configurations
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
// Define the model
class PasswordCode extends sequelize_1.Model {
}
PasswordCode.init({
    code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: database_1.default,
    modelName: 'emailcode', // Nombre de la tabla en la base de datos
});
// Definir las relaciones   
exports.default = PasswordCode;
