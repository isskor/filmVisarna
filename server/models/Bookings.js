const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    movie: { type: Schema.Types.ObjectId, ref: 'Movie' },
    // seatRows: [{ row: String, seats: [String] }],
    showtime: { type: Schema.Types.ObjectId, ref: 'ShowTime' },
    saloon: { type: Schema.Types.ObjectId, ref: 'Saloon' }
  },
  { timestamps: true }
);


const Booking = mongoose.model("Booking", bookingSchema);

 module.exports = Booking;
