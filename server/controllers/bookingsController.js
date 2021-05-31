const Booking = require('../models/Bookings');
const axios = require('axios');
const showTimes = require('../models/showTimes');

exports.createBooking = async (req, res) => {
  console.log(booking);
  res.json(booking);
};

exports.bookShowtime = async (req, res) => {
  const { showTime, seats } = req.body;
  console.log(req.body);
  console.log(req.session);
  try {
    // update showtime with pushed booked:[new seats]
    await showTimes
      .findOneAndUpdate({ _id: showTime }, { $push: { booked: seats } })
      .exec();

    // create booking with user
    const booking = await Booking.create({
      user: req.session.user._id,
      seatRows: seats,
      showtime: showTime,
    });

    res.json(booking);
  } catch (err) {
    console.log(err);
  }
};
