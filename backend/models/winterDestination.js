const mongoose = require("mongoose");

const WinterDestinationSchema = new mongoose.Schema(
  {
    travel_location: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
    },
    cover_image: {
      type: String,
      required: true
    },
    images_location: [{
      type: String,
      required: false
    }],
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
  },
  { timestamps: true, strict: true }
);

module.exports = mongoose.model(
  "winterModel",
  WinterDestinationSchema,
  "winter_destination"
);