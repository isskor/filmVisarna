const mongoose = require('mongoose');
// const { User } = require('Users.js');
const User = mongoose.model('User', userSchema);
const Movie = mongoose.model('Movie', movieSchema);
const ShowTime = mongoose.model('ShowTime', showTimeSchema);
const Saloon = mongoose.model('Saloon', saloonSchema);



const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: User },
    movie: { type: mongoose.Types.ObjectId, ref: Movie },
    seatRows: [{ row: String, seats: [String] }],
    showtime: { type: mongoose.Types.ObjectId, ref: ShowTime },
    saloon: { type: mongoose.Types.ObjectId, ref: Saloon }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Bookings', bookingSchema);


