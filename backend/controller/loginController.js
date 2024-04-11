const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginPost = async (request, response) => {
  try {
    const user = await userModel.findOne({
      email: request.body.email,
    });
    if (!user) {
      return response.status(404).send({
        statusCode: 404,
        message: "User not found",
      });
    }
    const isPasswordValide = await bcrypt.compare(
      request.body.password,
      user.password
    );

    if (!isPasswordValide) {
      return response.status(401).send({
        statusCode: 401,
        message: "Unauthorized",
      });
    }

    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );

    response.header("Authorization", token).status(200).send({
      statusCode: 200,
      message: "Ligin Successful",
      token,
    });
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};