const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const showTimeSchema = new mongoose.Schema(
  {
    movie: { type: ObjectId, ref: 'Movie' },
    saloon: { type: ObjectId, ref: 'Saloon' },
    date: String,
    time: String,
    booked: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model('ShowTime', showTimeSchema);

