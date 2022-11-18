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
const dotenv_1 = __importDefault(require("dotenv"));
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
        // if (!datos.username || !datos.password) {
        //   return {
        //     statusCode: 400,
        //     body: JSON.stringify({
        //       message: "missing data",
        //     }),
        //   };
        // }
        // const { username, password} = datos;
        // const checkUser = await User.query('username').eq(username).exec();
        // if(checkUser.length > 0){
        //   return {
        //     statusCode:400,
        //     body: JSON.stringify({
        //       message: 'failed credentials'
        //     })
        //   }
        // }
        // const [passwordBD] = checkUser;
        // const comparePass = await bcrypt.compare(password, passwordBD as any)
        // if(comparePass){
        //   return {
        //     statusCode: 200,
        //     body: JSON.stringify({
        //       status:'login succesful'
        //     })
        //   }
        // }
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
                error: "errro",
            }),
        };
    }
});
exports.login = login;
