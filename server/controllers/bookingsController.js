const Booking = require("../models/Bookings");
const axios = require('axios');


exports.createBooking = async (req, res) => {

    let booking = await Booking.create({
      user: req.body.user,
      seatRows: req.body.seatRows,
      showtime: req.body.showtime
    });
  
    console.log(booking);
    res.json(booking);
  };