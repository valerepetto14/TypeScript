"use strict";
import { Context, APIGatewayProxyCallback, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { v4 } from 'uuid'
import { User } from "../schemas/Users";
import { resolve, handlerError , verifyIfUserExist } from "./functions";
import bcrypt from 'bcryptjs';
// 

module.exports.hello = async (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback): Promise<APIGatewayProxyResult> => {
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

module.exports.register = async (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback): Promise<APIGatewayProxyResult> => {
  const [username, password, rol]:string = JSON.parse(event.body as string)
  if (!username || !password || !rol) {
   return {
      statusCode: 400,
      body: JSON.stringify({
        message: "username, password and rol are required"
      })
   }
  }
  const user:string = await verifyIfUserExist(username);
  if (user === 'error') {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "error"
      })
    }
  }
  if (user === 'username already exist') {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "username already exist"
      })
   }
  }
  await User.create({
    id: v4(),
    username,
    password: bcrypt.hashSync(password, 10),
    rol
  })
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: {
        username,
        rol
      }
    })
  }
}

module.exports.listUsers = async (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback): Promise<APIGatewayProxyResult> => {
  const data:object = await User.scan().exec();
  console.log(data);
}
