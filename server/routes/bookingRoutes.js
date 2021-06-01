const express = require("express");

const router = express.Router();

const {
  createBooking,
  bookShowtime,
  getUserBookings,
} = require("../controllers/bookingsController");

// router.post('/createBooking', createBooking);
router.put("/bookShowtime", bookShowtime);
router.get("/get-user-bookings", getUserBookings);

module.exports = router;
