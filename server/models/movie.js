const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    title: String,
    rated: String,
    trailer: String,
    actors: [],
    director: [],
    runTIme: String,
    genres: [],
    language: String,
    poster: String,
    plot: String,
    price: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Movie', movieSchema);
