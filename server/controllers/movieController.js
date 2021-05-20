const Movie = require('../models/movie');
const axios = require('axios');

exports.getMovies = async (req, res) => {
  let movies = await Movie.find().exec();
  res.json(movies);
};

// only for creating movies
// exports.createMovie = async (req, res) => {
//   const price = [120, 140, 160];
// const query =[]
//   let data = [];
//   for (let i = 0; i < query.length; i++) {
//     try {
//       const response = await axios.get(
//         `https://www.omdbapi.com/?apikey=64d07396&t=${query[i].name}`
//       );
//       //   console.log(response.data.data);
//       const p = price[Math.floor(Math.random() * 3)];
//       console.log(query[i].name);
//       //   data.push({ ...response.data.data, price: p, trailer: query[i].trailer });

//       // create
//       const movie = await new Movie({
//         title: response.data.Title,
//         rated: response.data.Rated,
//         trailer: query[i].trailer,
//         actors: response.data.Actors,
//         director: response.data.Director,
//         runTime: response.data.Runtime,
//         genres: response.data.Genre,
//         language: response.data.Language,
//         poster: response.data.Poster,
//         plot: response.data.Plot,
//         price: price[Math.floor(Math.random() * 3)],
//       }).save();
//     } catch (err) {
//       console.log(err.message);
//     }
//   }
//   res.json('hello');
// };
