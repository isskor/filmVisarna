const express = require('express');

const router = express.Router();

// controllers

const {
  createShowTime,
  getShowtime,
  getSingleShowtime,
  bookShowtime,
} = require('../controllers/showTimesController');

// routes

router.post('/showtime', createShowTime);
// router.get('/showtime', getShowtime);
router.get('/showtime', getShowtime);
router.get('/OneShowtime', getSingleShowtime);
router.put('/bookShowtime', bookShowtime);
// router.get("/movies/:id", getMovieById);

// export
module.exports = router;
