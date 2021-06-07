const mongoose = require('mongoose');

const saloonSchema = new mongoose.Schema(
  {
    numberOfSeats: Number,
    name: String,
    seatRows: [{ row: String, seats: [String] }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Saloon', saloonSchema);


