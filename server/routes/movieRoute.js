const express = require("express");

const router = express.Router();

// controllers

const {
  createMovie,
  getMovies,
  getMovieById,
} = require("../controllers/movieController");

// routes

// router.post('/movie', createMovie);
router.get("/movies", getMovies);
router.get("/movies/:id", getMovieById);

// export
module.exports = router;
