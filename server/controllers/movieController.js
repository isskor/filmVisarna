const Movie = require('../models/movie');
const axios = require('axios');

exports.getMovies = async (req, res) => {
  let movies = await Movie.find().exec();
  res.json(movies);
};

exports.getMovieById = async (req, res) => {
  console.log('movieId', req.params);
  let movie = await Movie.findById(req.params.id).exec();
  res.json(movie);
};

// only for creating movies
exports.createMovie = async (req, res) => {
  const price = [120, 140, 160];
  //   const query = [];
  let data = [];
  for (let i = 0; i < query.length; i++) {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=64d07396&t=${query[i].name}`
      );
      //   console.log(response.data.data);
      const p = price[Math.floor(Math.random() * 3)];
      console.log(query[i].name);
      //   data.push({ ...response.data.data, price: p, trailer: query[i].trailer });

      const time = response.data.Runtime.split(' ')[0];
      console.log(time);
      const movie = await new Movie({
        title: response.data.Title,
        rated: response.data.Rated,
        trailer: query[i].trailer,
        actors: response.data.Actors,
        director: response.data.Director,
        runTime: time,
        genres: response.data.Genre,
        language: response.data.Language,
        poster: response.data.Poster,
        plot: response.data.Plot,
        price: price[Math.floor(Math.random() * 3)],
      }).save();
    } catch (err) {
      console.log(err.message);
    }
  }
  res.json('hello');
};
const query = [
  {
    name: 'Dream Horse ',
    trailer: 'https://www.youtube.com/watch?v=ty_DAhC_CLc',
  },
  { name: 'The Dry', trailer: 'https://www.youtube.com/watch?v=VubvW5f6kro' },
  {
    name: 'space jam: a new legacy',
    trailer: 'https://www.youtube.com/watch?v=olXYZOsXw_o',
  },
  {
    name: 'Favolacce',
    trailer: 'https://www.youtube.com/watch?v=lOfwpdHKPaQ',
  },
  {
    name: 'No Time to Die',
    trailer: 'https://www.youtube.com/watch?v=vw2FOYjCz38',
  },
  {
    name: 'american fighter',
    trailer: 'https://www.youtube.com/watch?v=b7grLW9U7N4',
  },
  {
    name: 'new order',
    trailer: 'https://www.youtube.com/watch?v=9ZlrnTB2vkc',
  },
  {
    name: 'Venom: Let There Be Carnage',
    trailer: 'https://www.youtube.com/watch?v=-ezfi6FQ8Ds',
  },
  {
    name: 'godzilla vs. kong',
    trailer: 'https://www.youtube.com/watch?v=odM92ap8_c0',
  },
  {
    name: 'the unholy',
    trailer: 'https://www.youtube.com/watch?v=NmQiJPLYzPI',
  },
  {
    name: 'french exit',
    trailer: 'https://www.youtube.com/watch?v=bqMJeE15YiA',
  },
  {
    name: 'every breath you take',
    trailer: 'https://www.youtube.com/watch?v=tlMByNo3g8M',
  },
  {
    name: 'chaos walking}',
    trailer: 'https://www.youtube.com/watch?v=nRf4ZgzHoVw',
  },
  {
    name: 'raya and the last dragon',
    trailer: 'https://www.youtube.com/watch?v=1VIZ89FEjYI',
  },
  {
    name: 'The Matrix 4 ',
    trailer: 'https://www.youtube.com/watch?v=PkhXLgu-mYM',
  },
  {
    name: 'the world to come',
    trailer: 'https://www.youtube.com/watch?v=RhQu4tcHLeU',
  },
  {
    name: 'the father',
    trailer: 'https://www.youtube.com/watch?v=4TZb7YfK-JI',
  },
  {
    name: 'cosmic sin',
    trailer: 'https://www.youtube.com/watch?v=MNxsB6o6DJs',
  },
  {
    name: 'Spider-Man: No Way Home ',
    trailer: 'https://www.youtube.com/watch?v=r7M-XNGT5G0',
  },
  {
    name: 'spirit untamed',
    trailer: 'https://www.youtube.com/watch?v=9jG1nnQGpdI',
  },
  {
    name: 'come true',
    trailer: 'https://www.youtube.com/watch?v=Hh3s-Fq-3Hs',
  },
  {
    name: 'a quiet place part ii',
    trailer: 'https://www.youtube.com/watch?v=BpdDN9d9Jio',
  },
  {
    name: 'the courier',
    trailer: 'https://www.youtube.com/watch?v=oeYElSu3gEc',
  },
  {
    name: 'sas: red notice',
    trailer: 'https://www.youtube.com/watch?v=hRuUB6RKExQ',
  },
  { name: 'cruella', trailer: 'https://www.youtube.com/watch?v=gmRKv7n2If8' },
  { name: 'happily', trailer: 'https://www.youtube.com/watch?v=nagyNvw5Dmk' },
];
