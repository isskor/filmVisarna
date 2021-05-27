const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
     seatRows: [],
    showtime: { type: Schema.Types.ObjectId, ref: 'ShowTime' },
  },
  { timestamps: true }
);


const Booking = mongoose.model("Booking", bookingSchema);

 module.exports = Booking;
