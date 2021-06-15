const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserBookingSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    orderId: String,
    booking: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
  },
  { timestamps: true }
);

const Booking = mongoose.model('UserBooking', UserBookingSchema);

module.exports = Booking;
