const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: String,
    rated: String,
    trailer: String,
    actors: String,
    director: String,
    runTime: String,
    genres: String,
    language: String,
    poster: String,
    plot: String,
    price: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
