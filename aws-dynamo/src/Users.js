"use strict";
const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");
const { User } = require("../schemas/Users");
const { resolve, handlerError } = require("./functions");

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    Headers: {
      "Content-Type": "application/json"
    },
    body: { message:"hola" }
  };
};

module.exports.register = async (event, context, callback) => {
  try {
    var salt = bcrypt.genSaltSync(10);
    const { username, password, rol } = JSON.parse(event.body);
    if (!username | !password | !rol)
      callback(null, handlerError(400, "Missing data"));
    const newUser = await User.create({
      id: v4(),
      username: username,
      password: bcrypt.hashSync(password, salt),
      rol: rol,
    });
    return {
      statusCode: 500,
      body: JSON.stringify({
        mesagge: "register",
        rol: rol,
      }),
    };
  } catch (error) {
    callback(null, handlerError(500, "hola"));
  }
};

module.exports.getUsers = async (event, context, callback) => {
  const users = await User.scan().exec()
  return {
    statusCode: 200,
    body: JSON.stringify(users),
  };
};


