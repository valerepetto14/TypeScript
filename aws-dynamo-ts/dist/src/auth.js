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
exports.login = void 0;
const Users_1 = require("../schemas/Users");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const login = (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!event.body) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: "body null",
                }),
            };
        }
        const datos = JSON.parse(event.body);
        if (!datos.username || !datos.password) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "missing data",
                }),
            };
        }
        const user = datos;
        const userBD = yield Users_1.User.query('username').eq(user.username).exec();
        if (userBD.length === 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: 'failed credentials'
                })
            };
        }
        const comparePass = yield bcryptjs_1.default.compare(user.password, userBD[0].password);
        if (comparePass) {
            const payload = {
                "name": userBD[0].username,
                "rol": userBD[0].rol,
            };
            const token = jsonwebtoken_1.default.sign(payload, process.env.SECRET);
            return {
                statusCode: 200,
                headers: {
                    "Set-cookie": `token=${token}; HttpOnly; Secure; SameSite=Strict`
                },
                body: JSON.stringify({
                    message: 'success login',
                })
            };
        }
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'failded credentials'
            })
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error,
            }),
        };
    }
});
exports.login = login;
