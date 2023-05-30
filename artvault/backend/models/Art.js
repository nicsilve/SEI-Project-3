
const mongoose = require("mongoose");
const { UNSAFE_DataRouterStateContext } = require("react-router");

// models
const ArtSchema = new mongoose.Schema({
  artist: String,
  title: String,
  medium: String,
  image: String,
  artist_origin: String,
  description: String,
  date_of_creation: Number
},{timestamps: true});

const Art = mongoose.model("Art", ArtSchema);

module.exports = Art