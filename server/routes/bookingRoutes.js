const express = require('express');

const router = express.Router();

const {
  createBooking,
  bookShowtime,
  CartBookings,
} = require('../controllers/bookingsController');

// router.post('/createBooking', createBooking);
router.put('/bookShowtime', bookShowtime);
router.post('/cartBookings', CartBookings);
module.exports = router;
