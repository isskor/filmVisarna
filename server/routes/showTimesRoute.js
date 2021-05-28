const express = require('express');

const router = express.Router();

// controllers

const {
  createShowTime,
  getShowtime,
  getSingleShowtime,
} = require('../controllers/showTimesController');

// routes

router.post('/showtime', createShowTime);
// router.get('/showtime', getShowtime);
router.get('/showtime', getShowtime);
router.get('/OneShowtime', getSingleShowtime);
// router.get("/movies/:id", getMovieById);

// export
module.exports = router;
