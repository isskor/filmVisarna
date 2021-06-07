const express = require('express');

const router = express.Router();

const {
  createBooking,
  bookShowtime,
  getUserBookings,
  CartBookings,
  deleteBooking,
} = require('../controllers/bookingsController');

// router.post('/createBooking', createBooking);
router.put('/delete', deleteBooking);
router.put('/bookShowtime', bookShowtime);
router.get('/get-user-bookings', getUserBookings);
router.post('/cartBookings', CartBookings);

module.exports = router;
