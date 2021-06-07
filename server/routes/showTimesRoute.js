const express = require('express');

const router = express.Router();

// controllers

const {
  createShowTime,
  getShowtime,
  getSingleShowtime,
  getShowtimeByDate,
} = require('../controllers/showTimesController');

// routes

router.post('/showtime', createShowTime);
// router.get('/showtime', getShowtime);
router.get('/showtime', getShowtime);
router.get('/OneShowtime', getSingleShowtime);
// router.get("/movies/:id", getMovieById);
router.get('/showdate', getShowtimeByDate);

// export
module.exports = router;
