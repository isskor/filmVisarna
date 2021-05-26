const Bookings = require("../models/Bookings");

exports.createBooking = async (req, res) => {

    let booking = await Bookings.create({
      user: req.body.user,
      movie: req.body.movie,
      seatRows: req.body.seatRows,
      showtime: req.body.showtime,
      saloon: req.body.saloon
    });
  
    console.log(booking);
    res.json(booking);
  };