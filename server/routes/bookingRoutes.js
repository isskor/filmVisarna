const express = require('express');

const router = express.Router();

//controllers
const {
  bookShowtime,
  getUserBookings,
  getUserBooking,
  CartBookings,
  deleteBooking,
  createUserBooking,
} = require('../controllers/bookingsController');

//routes
router.put('/delete', deleteBooking);
router.put('/bookShowtime', bookShowtime);
router.get('/get-user-bookings', getUserBookings);
router.post('/cartBookings', CartBookings);
router.post('/createUserBooking', createUserBooking);
router.get('/userBooking', getUserBooking);

//export
module.exports = router;
