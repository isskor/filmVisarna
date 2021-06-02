const Booking = require('../models/Bookings');
const axios = require('axios');
const ShowTime = require('../models/showTimes');
const mongoose = require('mongoose');

exports.bookShowtime = async (req, res) => {
  const { showTime, seats, tickets } = req.body;
  console.log(req.body);
  // console.log(req.session);
  try {
    // update showtime with pushed booked:[new seats]
    await ShowTime.findOneAndUpdate(
      { _id: showTime },
      { $push: { booked: seats } }
    ).exec();

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

exports.CartBookings = async (req, res) => {
  let ids = req.body.map((booking) => mongoose.Types.ObjectId(booking));
  const bookings = await Booking.find({ _id: { $in: ids } })
    .populate({
      path: 'showtime',
      populate: {
        path: 'movie',
        model: 'Movie',
      },
    })
    .exec();
  res.json(bookings);
};

exports.deleteBooking = async (req, res) => {
  // expects booking id in body
  const { bookingId } = req.body;
  try {
    // get booking to delete
    const booking = await Booking.findById(bookingId).exec();

    // get showtime to alter the booked array for that showtime
    const updtShowtime = await ShowTime.findById(booking.showtime);

    // filter out the seats that are about to be deleted
    const newSeatArr = updtShowtime.booked.filter(
      (seat) => booking.seatRows.includes(seat) === false
    );

    // deletebooking
    await Booking.findByIdAndDelete(bookingId).exec();
    // update showtime bookings array
    await ShowTime.findByIdAndUpdate(booking.id, { booked: newSeatArr }).exec();

    res.json({ success: 'deleted' });
  } catch (err) {
    console.log(err);
  }
};
