"use strict";
import {
  Context,
  APIGatewayProxyCallback,
  APIGatewayEvent,
  APIGatewayProxyResult,
  APIGatewayProxyEvent,
} from "aws-lambda";
import { v4 } from "uuid";
import { User } from "../schemas/Users";
import { resolve, handlerError, verifyIfUserExist } from "./functions";
import bcrypt from "bcryptjs";
import { user, userAuth } from "./types";
import dotenv from "dotenv";
dotenv.config();

export const login = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: APIGatewayProxyCallback
): Promise<APIGatewayProxyResult> => {
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
    return{
      statusCode: 400,
      body: JSON.stringify({
        message: 'failded credentials'
      })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "errro",
      }),
    };
  }
};
