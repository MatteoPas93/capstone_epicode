const reviewsModel = require("../models/reviews");


exports.getUserReviews = async (request, response) => {
  const { id } = request.params;
  try {
    const reviews = await reviewsModel.find({ name: id });
    response.status(200).send(reviews);
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

exports.getDestinationReviews = async (request, response) => {
  const { id } = request.params;
  try {
    const reviews = await reviewsModel.find({ travel_location: id });
    response.status(200).send(reviews);
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

exports.getReview = async (request, response) => {
  const { id } = request.params;
  try {
    const review = await reviewsModel.findById(id);
    response.status(200).send(review);
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

exports.addDestinationReviews = async (request, response) => {
  const { id } = request.params;

  const newReview = new reviewsModel({
    comment: request.body.comment,
    evaluation_score: request.body.evaluation_score,
    travel_location: id,
    
  });

  try {
    const reviewToSave = await newReview.save();
    response.status(201).send({
      statusCode: 201,
      payload: reviewToSave,
    });
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

exports.patchReview = async (request, response) => {
  const { id } = request.params;

  try {
    const review = await reviewsModel.findById(id);

    if (!review) {
      return response.status(404).send({
        statusCode: 404,
        message: "Review not found",
      });
    }

    const updateData = request.body;
    const options = { new: true };

    const results = await reviewsModel.findByIdAndUpdate(
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

exports.deleteReview = async (request, response) => {
  const { id } = request.response;

  try {
    const review = await reviewsModel.findByIdAndDelete(id);

    if (!review) {
      return response.status(404).send({
        statusCode: 404,
        message: "Review not found",
      });
    }

    response.status(200).send("Review has been removed");
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};
