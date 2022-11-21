"use strict";
import {
  Context,
  APIGatewayProxyCallback,
  APIGatewayEvent,
  APIGatewayProxyResult,
  APIGatewayProxyEvent,
} from "aws-lambda";
import { v4 } from "uuid";
import { Task } from "../schemas/tasks";
import { resolve, handlerError, verifyIfUserExist } from "./functions";
import { user, userAuth } from "./types";
import dotenv from "dotenv";
dotenv.config();

export const createTask = async (
  event: APIGatewayEvent,
  context: Context,
  allback: APIGatewayProxyCallback
): Promise<APIGatewayProxyResult> => {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        Error: "Missing data",
      }),
    };
  }
  console.log(event.headers)
  return {
    statusCode: 200,
    body: JSON.stringify({
    "HOLA": "HOLA"
    })
  }
};
