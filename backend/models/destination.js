const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema(
  {
    travel_location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cover_image: {
      type: String,
      required: true,
    },
    images_location: [],
    description: {
      type: String,
      required: true,
      max: 250,
    },
    main_attractions: {
      type: String,
      required: true,
      max: 250,
    },
    season: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, strict: true }
);

module.exports = mongoose.model(
  "destinationModel",
  DestinationSchema,
  "destination"
);
