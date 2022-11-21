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
import jwt from "jsonwebtoken"
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
    if (!datos.username || !datos.password) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "missing data",
        }),
      };
    }
    const user: userAuth = datos;
    const userBD = await User.query('username').eq(user.username).exec();
    if(userBD.length === 0){
      return {
        statusCode:400,
        body: JSON.stringify({
          message: 'failed credentials'
        })
      }
    }
    const comparePass = await bcrypt.compare(user.password, userBD[0].password)
    if(comparePass){
      const payload :object = {
        "name": userBD[0].username,
        "rol": userBD[0].rol,
      }
      const token = jwt.sign(payload, process.env.SECRET as string)
      return {
        statusCode: 200,
        headers: {
          "Set-cookie": `token=${token}; HttpOnly; Secure; SameSite=Strict`
        },
        body: JSON.stringify({
          message: 'success login',
        })
      }
    }
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
        error: error,
      }),
    };
  }
};
