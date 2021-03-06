const Movie = require('../models/movie');
const axios = require('axios');

exports.getMovies = async (req, res) => {
  let movies = await Movie.find().exec();
  res.json(movies);
};

exports.getMovieById = async (req, res) => {
  let movie = await Movie.findById(req.params.id).exec();
  res.json(movie);
};

//For finding movies/movie in the search bar at home.
exports.findMovieByKeyword = async (req, res) => {
  // find with mongoose or
  let foundMovies = await Movie.find({
    $or: [
      { title: { $regex: req.body.keyword, $options: 'gi' } },
      { actors: { $regex: req.body.keyword, $options: 'gi' } },
      { director: { $regex: req.body.keyword, $options: 'gi' } },
    ],
  }).exec();

  if (foundMovies) {
    res.json(foundMovies);
  } else {
    res.send('No movies found...');
  }
};

exports.filterMovies = async (req, res) => {
  const { rated, price, runTime, genres, language } = req.body;

  let filterData = {};

  // create filter object if those filters exist in body
  // ex. if rated, price exist ==> filterData = {rated: value, price: {$gte: max, $lte:min }}

  if (rated.length > 0) filterData = { ...filterData, rated: { $in: rated } };
  if (price.length > 0)
    filterData = {
      ...filterData,
      price: {
        $gte: Math.min(...price),
        $lte: Math.max(...price),
      },
    };

  if (runTime.length > 0)
    filterData = {
      ...filterData,
      runTime: { $gte: Math.min(...runTime), $lte: Math.max(...runTime) },
    };

  if (genres.length > 0)
    filterData = { ...filterData, genres: { $in: genres } };

  if (language.length > 0)
    filterData = { ...filterData, language: { $in: language } };

  // find movies with the filter object
  // example filterObj
  // filterData: {
  // price : {$gte:max, $lte: min} ,
  // runtime: {$gte: max, $lte: min},
  //  genres: {$in: ['action', 'whatever']},
  //
  // }
  const filteredMovies = await Movie.find(filterData).exec();
  if (filteredMovies) {
    res.json(filteredMovies);
  } else {
    res.send("Can't find movies");
  }
};

// only for creating movies
const query = [
  {
    name: 'Dream Horse ',
    trailer: 'https://www.youtube.com/embed/ty_DAhC_CLc',
  },
  { name: 'The Dry', trailer: 'https://www.youtube.com/embed/VubvW5f6kro' },
  {
    name: 'space jam: a new legacy',
    trailer: 'https://www.youtube.com/embed/olXYZOsXw_o',
  },
  {
    name: 'Favolacce',
    trailer: 'https://www.youtube.com/embed/lOfwpdHKPaQ',
  },
  {
    name: 'No Time to Die',
    trailer: 'https://www.youtube.com/embed/vw2FOYjCz38',
  },
  {
    name: 'american fighter',
    trailer: 'https://www.youtube.com/embed/b7grLW9U7N4',
  },
  {
    name: 'new order',
    trailer: 'https://www.youtube.com/embed/9ZlrnTB2vkc',
  },
  {
    name: 'Venom: Let There Be Carnage',
    trailer: 'https://www.youtube.com/embed/-ezfi6FQ8Ds',
  },
  {
    name: 'godzilla vs. kong',
    trailer: 'https://www.youtube.com/embed/odM92ap8_c0',
  },
  {
    name: 'the unholy',
    trailer: 'https://www.youtube.com/embed/NmQiJPLYzPI',
  },
  {
    name: 'french exit',
    trailer: 'https://www.youtube.com/embed/bqMJeE15YiA',
  },
  {
    name: 'every breath you take',
    trailer: 'https://www.youtube.com/embed/tlMByNo3g8M',
  },
  {
    name: 'chaos walking}',
    trailer: 'https://www.youtube.com/embed/nRf4ZgzHoVw',
  },
  {
    name: 'raya and the last dragon',
    trailer: 'https://www.youtube.com/embed/1VIZ89FEjYI',
  },
  {
    name: 'The Matrix 4 ',
    trailer: 'https://www.youtube.com/embed/PkhXLgu-mYM',
  },
  {
    name: 'the world to come',
    trailer: 'https://www.youtube.com/embed/RhQu4tcHLeU',
  },
  {
    name: 'the father',
    trailer: 'https://www.youtube.com/embed/4TZb7YfK-JI',
  },
  {
    name: 'cosmic sin',
    trailer: 'https://www.youtube.com/embed/MNxsB6o6DJs',
  },
  {
    name: 'Spider-Man: No Way Home ',
    trailer: 'https://www.youtube.com/embed/r7M-XNGT5G0',
  },
  {
    name: 'spirit untamed',
    trailer: 'https://www.youtube.com/embed/9jG1nnQGpdI',
  },
  {
    name: 'come true',
    trailer: 'https://www.youtube.com/embed/Hh3s-Fq-3Hs',
  },
  {
    name: 'a quiet place part ii',
    trailer: 'https://www.youtube.com/embed/BpdDN9d9Jio',
  },
  {
    name: 'the courier',
    trailer: 'https://www.youtube.com/embed/zbR1A95Ll8Q',
  },
  {
    name: 'sas: red notice',
    trailer: 'https://www.youtube.com/embed/hRuUB6RKExQ',
  },
  { name: 'Joker ', trailer: 'https://www.youtube.com/embed/zAGVQLHvwOY' },
  { name: 'happily', trailer: 'https://www.youtube.com/embed/gyNvw5Dmk' },
];

exports.createMovie = async (req, res) => {
  const price = [120, 140, 160];
  const query = [];
  let data = [];
  // loop all queries, get name and trailer, and use name to fetch data from omdbapi
  for (let i = 0; i < query.length; i++) {
    try {
      const response = await axios.get(
        // `https://www.omdbapi.com/embed/2d5b182c&t=${query[i].name}`
        `http://www.omdbapi.com/?t=${query[i].name}&apikey=2d5b182c`
      );

      // sets random price from price array
      const p = price[Math.floor(Math.random() * 3)];
      // console.log(query[i].name);
      //   data.push({ ...response.data.data, price: p, trailer: query[i].trailer });

      // fix the time and make it a number
      const time = +response.data.Runtime.split(' ')[0];
      // splits genres from string to array
      const g = response.data.Genre.replace(/\s/g, '');
      // sets genres
      const genres = g.split(',');

      // same as genres but with langueages
      const l = response.data.Language.replace(/\s/g, '');
      const langs = l.split(',');

      // set new movie object
      const movie = await new Movie({
        title: response.data.Title,
        rated: response.data.Rated,
        trailer: query[i].trailer,
        actors: response.data.Actors,
        director: response.data.Director,
        runTime: time,
        genres: genres,
        language: langs,
        poster: response.data.Poster,
        plot: response.data.Plot,
        price: price[Math.floor(Math.random() * 3)],
      }).save();
    } catch (err) {}
  }
  res.json('hello');
};
