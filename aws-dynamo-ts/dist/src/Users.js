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
exports.getUserByUsername = exports.listUsers = exports.register = exports.hello = void 0;
const uuid_1 = require("uuid");
const Users_1 = require("../schemas/Users");
const functions_1 = require("./functions");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//
const hello = (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Go api where i am learning typescript",
        }, null, 2),
    };
});
exports.hello = hello;
const register = (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
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
        if (!datos.username || !datos.password || !datos.rol) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "missing data",
                }),
            };
        }
        const { username, password, rol } = datos;
        const userExist = yield (0, functions_1.verifyIfUserExist)(username);
        if (userExist === "error") {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "error",
                }),
            };
        }
        if (userExist === "username already exist") {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "username already exist",
                }),
            };
        }
        yield Users_1.User.create({
            id: (0, uuid_1.v4)(),
            username,
            password: bcryptjs_1.default.hashSync(datos.password, 10),
            rol,
        });
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: {
                    username,
                    rol,
                },
            }),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error }),
        };
    }
});
exports.register = register;
const listUsers = (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Users_1.User.scan().exec();
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: error,
            }),
        };
    }
});
exports.listUsers = listUsers;
const getUserByUsername = (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!event.pathParameters) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    Error: "Missing data"
                })
            };
        }
        const username = event.pathParameters.username;
        const user = yield Users_1.User.query("username").eq(username).exec();
        if (user) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    data: user
                })
            };
        }
        return {
            statusCode: 400,
            body: JSON.stringify({})
        };
    }
    catch (error) {
        throw error;
    }
});
exports.getUserByUsername = getUserByUsername;
