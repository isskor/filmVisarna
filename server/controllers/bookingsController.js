const Booking = require('../models/Bookings');
const UserBooking = require('../models/UserBooking');
const axios = require('axios');
const ShowTime = require('../models/showTimes');
const mongoose = require('mongoose');

exports.bookShowtime = async (req, res) => {
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
    const newSeatArr = updtShowtime.booked.filter((seat) => {
      const a = booking.seatRows.includes(seat);
      if (a) return;
      return seat;
    });

    // deletebooking
    await Booking.findByIdAndDelete(bookingId).exec();
    // update showtime bookings array
    await ShowTime.findByIdAndUpdate(booking.showtime, {
      booked: newSeatArr,
    }).exec();

    res.json({ success: 'deleted' });
  } catch (err) {
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

exports.createUserBooking = async (req, res) => {
  const { bookings } = req.body;
  // create new userbooking object with ALL bookings in user cart
  const newBooking = await new UserBooking({
    user: req.session.user._id,
    booking: req.body.bookings,
  }).save();

  // update each new booking to match the user ( in case, user decides to book and then login to another account to book)

  bookings.forEach((bookingId) => {
    Booking.findOneAndUpdate(
      { _id: bookingId },
      { user: req.session.user._id }
    );
  });

  res.json(newBooking);
};

exports.getUserBooking = async (req, res) => {
  console.log('getuserb');
  console.log(req.query);
  const b = await UserBooking.findById(req.query.id).populate({
    path: 'booking',
    populate: {
      path: 'showtime',
      populate: [{ path: 'movie' }, { path: 'saloon' }],
    },
  });

  res.json(b);
};
