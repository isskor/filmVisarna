const Booking = require('../models/Bookings');
const axios = require('axios');
const ShowTime = require('../models/showTimes');
const mongoose = require('mongoose');

exports.bookShowtime = async (req, res) => {
  console.log('line 7 bookingcontroller');
  const { showTime, seats, tickets } = req.body;
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
  console.log('line 30 bookingcontroller');
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
  console.log(req.body);
  const { bookingId } = req.body;
  try {
    // get booking to delete
    const booking = await Booking.findById(bookingId).exec();

    // get showtime to alter the booked array for that showtime
    const updtShowtime = await ShowTime.findById(booking.showtime);
    console.log(updtShowtime);
    // filter out the seats that are about to be deleted
    const newSeatArr = updtShowtime.booked.filter((seat) => {
      const a = booking.seatRows.includes(seat);
      console.log(a);
      if (a) return;
      return seat;
    });

    console.log(updtShowtime.booked);
    console.log(newSeatArr);
    // deletebooking
    await Booking.findByIdAndDelete(bookingId).exec();
    // update showtime bookings array
    await ShowTime.findByIdAndUpdate(booking.showtime, {
      booked: newSeatArr,
    }).exec();

    res.json({ success: 'deleted' });
  } catch (err) {
    console.log(`line 70`, err);
  }
};

//Get all user-bookings
exports.getUserBookings = async (req, res) => {
  console.log(
    'Session id',
    req.session.user._id,
    'session user: ',
    req.session.user
  );
  let userBookings = await Booking.find({
    user: mongoose.Types.ObjectId(req.session.user._id),
  })
    .populate({
      path: 'showtime',
      populate: {
        path: 'movie',
        model: 'Movie',
      },
    })
    .populate({
      path: 'showtime',
      populate: {
        path: 'saloon',
        model: 'Saloon',
      },
    })
    .exec();

  if (userBookings) {
    res.json(userBookings);
  } else {
    res.json({ error: 'error no bookings found' });
  }
};
