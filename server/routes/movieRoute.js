const express = require("express");

const router = express.Router();

// controllers

const {
  createMovie,
  getMovies,
  getMovieById,
  filterMovies,
  findMovieByKeyword,
} = require("../controllers/movieController");

// routes
router.post("/movie", createMovie);
router.get("/movies", getMovies);
router.get("/movies/:id", getMovieById);
router.post("/filtered-movies", filterMovies);
router.post("/movies-by-keyword", findMovieByKeyword);

// export
module.exports = router;
