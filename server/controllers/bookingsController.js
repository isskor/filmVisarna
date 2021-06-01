const Booking = require('../models/Bookings');
const axios = require('axios');
const showTimes = require('../models/showTimes');

exports.bookShowtime = async (req, res) => {
  const { showTime, seats, tickets } = req.body;
  console.log(req.body);
  // console.log(req.session);
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
      tickets: tickets,
    });

    res.json(booking);
  } catch (err) {
    console.log(err);
  }
};
