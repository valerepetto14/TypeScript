"use strict";
const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");
const aws = require("aws-sdk");

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "hello from bootia",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.register = async (event) => {
  try {
    const dynamodb = new aws.DynamoDB.DocumentClient()
    const {username, password} = JSON.parse(event.body);
    const createdAt = new Date()
    const id = v4()
    const passEncrypt = await bcrypt.hash(password, 8);
    const newUser = {
      id,
      username,
      passEncrypt,
      createdAt
    }
    await dynamodb.put({
      TableName: "UsersTable",
      Item: newUser
    }).promise()
    return {
      statusCode: 200,
      body: JSON.stringify(newUser)
    }
  } catch(error) {
    return {
      statusCode:500,
      body: JSON.stringify("error")
    }
  }
}
module.exports.getUsers = async (event) => {
  const dynamodb = new aws.DynamoDB.DocumentClient()
  const users = await dynamodb.scan({
    TableName: "UsersTable"
  }).promise()
  return {
    statusCode: 200,
    body: JSON.stringify(users.Items)
  }
}