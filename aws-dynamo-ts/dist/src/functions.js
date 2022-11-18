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
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyIfUserExist = exports.handlerError = exports.resolve = void 0;
const Users_1 = require("../schemas/Users");
const resolve = (promise) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield promise;
        return [null, data];
    }
    catch (error) {
        return [error, null];
    }
});
exports.resolve = resolve;
const handlerError = (status, message) => {
    return {
        statusCode: status,
        body: JSON.stringify({ message: message }),
    };
};
exports.handlerError = handlerError;
const verifyIfUserExist = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Users_1.User.query('username').eq(username).exec();
        if (data.length > 0) {
            return 'username already exist';
        }
        return 'username available';
    }
    catch (error) {
        return JSON.stringify({ error });
    }
});
exports.verifyIfUserExist = verifyIfUserExist;
