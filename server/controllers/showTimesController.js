// const Movie = require('../models/movie');
const axios = require('axios');
const dates = require('../dates.json');
const Saloon = require('../models/saloon');
const Movie = require('../models/movie');
const showTimes = require('../models/showTimes');

// only for creating saloons

exports.getSingleShowtime = async (req, res) => {
  const { id } = req.query;
  console.log('query', req.query);
  const show = await showTimes
    .findById(id)
    .populate('movie')
    .populate('saloon')
    .exec();

  res.json(show);
  console.log(show);
};

exports.getShowtime = async (req, res) => {
  const { date, id } = req.query;
  console.log('query', req.query);
  const shows = await showTimes
    .find({ movie: id, date })
    .populate('movie', 'title')
    .populate('saloon', 'name')
    .exec();

  res.json(shows);
  console.log(shows);
};

exports.BookShowtime = async (req, res) => {
  const { showTime, seats } = req.query;
  //   console.log(req.query);
  const shows = await showTimes
    .findOneAndUpdate({ id: showTime }, { booked: seats })
    .exec();
  res.json(shows);
};

exports.createShowTime = async (req, res) => {
  let movies = await Movie.find().exec();
  let saloon = await Saloon.find().exec();

  for (let i = 0; i < dates.length; i++) {
    let movIndex = i % (movies.length - 1);
    let m = movies[movIndex];
    let d = dates[i];
    let ran = Math.abs(Math.floor(Math.random() * movies.length - 1));

    let movList2 = movies.filter((mov) => mov !== m);
    let ran2 = Math.abs(Math.floor(Math.random() * movList2.length - 1));

    let m2 = movList2[ran2];
    const newMov = await new showTimes({
      movie: m._id,
      saloon: saloon[0]._id,
      date: d.date,
      time: d.time + '.00',
    }).save();
    const newMov2 = await new showTimes({
      movie: m2._id,
      saloon: saloon[1]._id,
      date: d.date,
      time: d.time + '.00',
    }).save();
  }

  // console.log(movies);
  //   console.log(saloon);
  res.json('hello');
};
