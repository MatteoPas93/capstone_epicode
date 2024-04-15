const imageModel = require("../models/image");

exports.getImages = async (request, responser) => {
  try {
    const images = await imageModel.find();
    responser.status(200).send(images);
  } catch (error) {
    responser.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

exports.addImages = async (request, response) => {
  const newImage = new imageModel({
    image: request.body.image,
  });

  try {
    const imageToSave = await newImage.save();
    response.status(201).send({
      statusCode: 201,
      payload: imageToSave,
    });
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};
