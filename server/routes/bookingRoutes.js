const express = require('express');

const router = express.Router();

const {
  createBooking,
  bookShowtime,
} = require('../controllers/bookingsController');

// router.post('/createBooking', createBooking);
router.put('/bookShowtime', bookShowtime);

module.exports = router;
