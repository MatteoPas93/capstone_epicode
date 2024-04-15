const userModel = require("../models/users");

exports.getUsers = async (request, response) => {
  try {
    const users = await userModel.find();
    response.status(200).send(users);
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

exports.getUser = async (request, response) => {
  const { id } = request.params;
  try {
    const user = await userModel.findById(id);

    if (!user) {
      return response.status(404).send({
        statusCode: 404,
        message: "User not found",
      });
    }
    response.status(200).send(user);
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

exports.postUser = async (request, response) => {
  const newUser = new userModel({
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
    role: request.body.role,
    birthday: request.body.birthday,
    avatar: request.body.avatar,
  });

  try {
    const userToSave = await newUser.save();
    response.status(201).send({
      statusCode: 201,
      payload: userToSave,
    });
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

exports.patchUser = async (request, response) => {
  const { id } = request.params;

  try {
    const user = await userModel.findById(id);

    if (!user) {
      return response.status(404).send({
        statusCode: 404,
        message: "User not found",
      });
    }

    const updatedData = request.body;
    const options = { new: true };

    const results = await userModel.findByIdAndUpdate(id, updatedData, options);

    response.status(200).send(results);
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

exports.deleteUser = async (request, response) => {
  const { id } = request.params;

  try {
    const user = await userModel.findByIdAndDelete(id);

    if (!user) {
      return response.status(404).send({
        statusCode: 404,
        message: "User not found",
      });
    }

    response.status(200).send("The user has been removed");
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};
