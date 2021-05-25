// const Movie = require('../models/movie');
const axios = require('axios');
const dates = require('../showtimes.json');
const Saloon = require('../models/saloon');

exports.getSaloon = async (req, res) => {
  const saloons = await Saloon.find().exec();
  res.json(saloons);
};

// only for creating saloons
// exports.createSaloon = async (req, res) => {

//   const s = await new Saloon({
//     numberOfSeats: 52,
//     name: 'Saloon One',
//     seatRows: [
//       { row: 'A', seats: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'] },
//       { row: 'B', seats: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8'] },
//       {
//         row: 'C',
//         seats: [
//           'C1',
//           'C2',
//           'C3',
//           'C4',
//           'C5',
//           'C6',
//           'C7',
//           'C8',
//           'C9',
//           'C10',
//           'C11',
//           'C12',
//         ],
//       },
//       {
//         row: 'D',
//         seats: [
//           'D1',
//           'D2',
//           'D3',
//           'D4',
//           'D5',
//           'D6',
//           'D7',
//           'D8',
//           'D10',
//           'D11',
//           'D12',
//         ],
//       },
//       {
//         row: 'E',
//         seats: [
//           'E1',
//           'E2',
//           'E3',
//           'E4',
//           'E5',
//           'E6',
//           'E7',
//           'E8',
//           'E10',
//           'E11',
//           'E12',
//         ],
//       },
//     ],
//   }).save();
//   res.json(s);
// };
