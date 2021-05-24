const express = require('express');

const router = express.Router();

// controllers

const {
  createMovie,
  getMovies,
  getMovieById,
  filterMovies,
} = require('../controllers/movieController');

// routes

router.post('/movie', createMovie);
router.get('/movies', getMovies);
router.get('/movies/:id', getMovieById);
router.post('/filtered-movies', filterMovies);

// export
module.exports = router;
