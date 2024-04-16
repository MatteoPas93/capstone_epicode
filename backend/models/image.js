const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  image: [],
});

module.exports = mongoose.model("imageModel", ImageSchema, "image");
