const express = require('express');

const router = express.Router();

const {
  createBooking,
  bookShowtime,
  getUserBookings,
  getUserBooking,
  CartBookings,
  deleteBooking,
  createUserBooking,
} = require('../controllers/bookingsController');

// router.post('/createBooking', createBooking);
router.put('/delete', deleteBooking);
router.put('/bookShowtime', bookShowtime);
router.get('/get-user-bookings', getUserBookings);
router.post('/cartBookings', CartBookings);
router.post('/createUserBooking', createUserBooking);
router.get('/userBooking', getUserBooking);

module.exports = router;
