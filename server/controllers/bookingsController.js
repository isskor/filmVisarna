const Booking = require("../models/Bookings");
const axios = require("axios");
const showTimes = require("../models/showTimes");

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

exports.getUserBookings = async (req, res) => {
  console.log("SESSION ID", req.session.id);
  let userBookings = await Booking.find({ user: req.session._id })
    .populate({
      path: "showtime",
      populate: {
        path: "movie",
        model: "Movie",
      },
    })
    .populate({
      path: "showtime",
      populate: {
        path: "saloon",
        model: "Saloon",
      },
    })
    .exec();

  if (userBookings) {
    res.json(userBookings);
    console.log("userBookings!!!!", userBookings);
  } else {
    res.json({ error: "error no bookings found" });
  }
};
