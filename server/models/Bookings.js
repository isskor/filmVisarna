const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    user: { type: ObjectId, ref: 'User' },
    movie: { type: ObjectId, ref: 'Movie' },
    seatRows: [{ row: String, seats: [String] }],
    showtime: { type: ObjectId, ref: 'ShowTime' },
    saloon: { type: ObjectId, ref: 'Saloon' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Bookings', bookingSchema);
