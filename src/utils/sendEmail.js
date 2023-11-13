"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendEmail = (options) => new Promise((resolve, reject) => {
    const transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const mailOptions = Object.assign({ from: process.env.EMAIL }, options);
    transporter.sendMail(mailOptions, (error, info) => {
        console.log(error, info);
        if (error) {
            console.log(error);
            return reject({ message: "An error has occured" });
        }
        return resolve({ message: "Email sent successfully" });
    });
});
exports.default = sendEmail;
