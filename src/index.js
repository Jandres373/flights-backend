"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./database/database"));
const PORT = 8080;
try {
    database_1.default.sync();
    console.log('db is connected');
    app_1.default.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
catch (error) {
    console.log(error);
}
