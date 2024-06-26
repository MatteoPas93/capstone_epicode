const destinationModel = require("../models/destination");


exports.getAllDestinations = async (request, response) => {
  try {
    const destinations = await destinationModel.find();

    response.status(200).send(destinations);
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: 'Internal Server Error'
    });
  };
};

exports.getDestinations = async (request, response) => {
  const { page = 1, pageSize = 20 } = request.query;
  try {
    const destinations = await destinationModel
      .find()
      .limit(pageSize)
      .skip((page - 1) * pageSize)
      .sort({ travel_location: 1 });

    const totalDestination = await destinationModel.countDocuments();

    response.status(200).send({
      currentPage: page,
      pageSize,
      totalPages: Math.ceil(totalDestination / pageSize),
      totalDestination: totalDestination,
      destinations
    });
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

exports.getDestination = async (request, response) => {
  const { id } = request.params;
  try {
    const destination = await destinationModel.findById(id);

    if (!destination) {
      return response.status(404).send({
        statusCode: 404,
        message: "Destination not found",
      });
    }
    response.status(200).send(destination);
  } catch (error) {
    response.status(500).send({
      message: "Internal Server Error",
    });
  }
};

exports.addDestination = async (request, response) => {
  const newDestination = new destinationModel({
    travel_location: request.body.travel_location,
    price: request.body.price,
    cover_image: request.body.cover_image,
    images_location: request.body.images_location,
    description: request.body.description,
    main_attractions: request.body.main_attractions,
    season: request.body.season,
  });

  try {
    const destinationToSave = await newDestination.save();
    response.status(201).send({
      statusCode: 201,
      payload: destinationToSave,
    });
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

exports.patchDestination = async (request, response) => {
  const { id } = request.params;

  try {
    const destination = await destinationModel.findById(id);

    if (!destination) {
      return response.status(404).send({
        statusCode: 404,
        message: "Destination not found",
      });
    }

    const updateData = request.body;
    const options = { new: true };

    const results = await destinationModel.findByIdAndUpdate(
      id,
      updateData,
      options
    );

    response.status(200).send(results);
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

exports.deleteDestination = async (request, response) => {
  const { id } = request.params;

  try {
    const destination = await destinationModel.findByIdAndDelete(id);

    if (!destination) {
      return response.status(404).send({
        statusCode: 404,
        message: "Destination not found",
      });
    }

    response.status(200).send("Destination has been removed");
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};
