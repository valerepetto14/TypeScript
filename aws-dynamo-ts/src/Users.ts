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
//

export const hello = async (
  event: APIGatewayEvent,
  context: Context,
  callback: APIGatewayProxyCallback
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go api where i am learning typescript",
      },
      null,
      2
    ),
  };
};

export const register = async (
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
    const datos: user = JSON.parse(event.body);
    if (!datos.username || !datos.password || !datos.rol) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "missing data",
        }),
      };
    }
    const { username, password, rol } = datos;
    const userExist: string = await verifyIfUserExist(username);
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
    await User.create({
      id: v4(),
      username,
      password: bcrypt.hashSync(datos.password, 10),
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
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};

export const listUsers = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: APIGatewayProxyCallback
): Promise<APIGatewayProxyResult> => {
  try {
    const data = await User.scan().exec();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error,
      }),
    };
  }
};
