
const mongoose = require("mongoose");
const { UNSAFE_DataRouterStateContext } = require("react-router");

// models
const ArtSchema = new mongoose.Schema({
  artist: String,
  title: String,
  medium: String,
  img: String,
  artist_origin: String
},{timestamps: true});

const Art = mongoose.model("Art", ArtSchema);

module.exports = Art