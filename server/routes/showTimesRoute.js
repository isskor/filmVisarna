const express = require('express');

const router = express.Router();

// controllers

const {
  createShowTime,
  getShowtime,
} = require('../controllers/showTimesController');

// routes

router.post('/showtime', createShowTime);
// router.get('/showtime', getShowtime);
router.get('/showtime', getShowtime);
// router.get("/movies/:id", getMovieById);

// export
module.exports = router;
