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
exports.remove = exports.update = exports.verifyPassword = exports.resetPassword = exports.create = exports.getCode = exports.getMe = exports.getOne = exports.getAll = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const sendEmail_1 = __importDefault(require("../utils/sendEmail"));
const emailCode_model_1 = __importDefault(require("../models/emailCode.model"));
const passwordCode_model_1 = __importDefault(require("../models/passwordCode.model"));
/**
 * @description Obtener todos los registros
 */
const getAll = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield user_model_1.default.findAll();
        return res.json(response);
    }
    catch (error) {
        return res.status(500).json({ error: 'Error al obtener los registros' });
    }
});
exports.getAll = getAll;
/**
 * @description Obtener un registro por ID
 */
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const response = yield user_model_1.default.findByPk(id);
        if (response) {
            return res.json(response);
        }
        else {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
    }
    catch (error) {
        return res.status(500).json({ error: 'Error al obtener el registro' });
    }
});
exports.getOne = getOne;
const getMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loggedUser = req.user;
    try {
        const user = yield user_model_1.default.findByPk(loggedUser.id);
        res.json(user);
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.getMe = getMe;
const getCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.params;
    try {
        const codeInDB = yield emailCode_model_1.default.findOne({ where: { code } });
        if (!codeInDB)
            return res.status(401).json({ message: "incorrect code" });
        const user = yield user_model_1.default.findByPk(codeInDB.userId);
        if (!user)
            return res.status(401).json({ message: "error" });
        user.update({ isVerified: true });
        yield emailCode_model_1.default.destroy({ where: { id: codeInDB.id } });
        res.json({ message: 'user verified' });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.getCode = getCode;
/**
 * @description Crear un nuevo registro
 */
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, email } = req.body;
    const sentData = req.body;
    const encoded = yield bcrypt_1.default.hash(password, 10);
    try {
        const response = yield user_model_1.default.create(Object.assign(Object.assign({}, sentData), { password: encoded }));
        const verCode = require('crypto').randomBytes(32).toString('hex');
        yield (0, sendEmail_1.default)({
            to: `${email}`,
            subject: "Verification",
            text: `Please, access the following link to activate and verify your account. ${sentData.frontBaseUrl}/auth/verify/${verCode}` // texto
        });
        const createdCode = yield emailCode_model_1.default.create({ code: verCode, userId: response.id });
        return res.json({ response, createdCode });
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.create = create;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, frontBaseUrl } = req.body;
    const user = yield user_model_1.default.findOne({ where: { email } });
    if (!user)
        return res.status(401);
    const code = require('crypto').randomBytes(32).toString('hex');
    (0, sendEmail_1.default)({
        to: `${email}`,
        subject: "Reset password",
        text: `Please, access the following link to reset your password. ${frontBaseUrl}/auth/reset_password/${code}` // texto
    });
    const id = user.id;
    yield passwordCode_model_1.default.create({ userId: id, code });
});
exports.resetPassword = resetPassword;
const verifyPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password } = req.body;
        const { code } = req.params;
        const verifiedCode = yield emailCode_model_1.default.findOne({ where: { code } });
        if (!verifiedCode)
            return res.status(404);
        const encripted = yield bcrypt_1.default.hash(password, 10);
        const newUser = {
            password: encripted
        };
        const response = yield user_model_1.default.update(newUser, { where: { id: verifiedCode.userId } });
        res.json(response);
        yield emailCode_model_1.default.destroy({ where: { id: verifiedCode.id } });
    }
    catch (error) {
        res.json(error);
    }
});
exports.verifyPassword = verifyPassword;
/**
 * @description Actualizar un registro por ID
 */
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    try {
        const [rowsUpdated] = yield user_model_1.default.update(data, { where: { id } });
        if (rowsUpdated === 1) {
            return res.json({ message: 'Registro actualizado correctamente' });
        }
        else {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
    }
    catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el registro' });
    }
});
exports.update = update;
/**
 * @description Eliminar un registro por ID
 */
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const rowsDeleted = yield user_model_1.default.destroy({ where: { id } });
        if (rowsDeleted === 1) {
            return res.json({ message: 'Registro eliminado correctamente' });
        }
        else {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
    }
    catch (error) {
        return res.status(500).json({ error: 'Error al eliminar el registro' });
    }
});
exports.remove = remove;
user_model_1.default.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password; // Excluye la contraseña
    return values;
};
