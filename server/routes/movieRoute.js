const express = require("express");

const router = express.Router();

// controllers

const { createMovie, getMovies } = require("../controllers/movieController");

// routes

// router.post('/movie', createMovie);
router.get("/movies", getMovies);

// export
module.exports = router;
