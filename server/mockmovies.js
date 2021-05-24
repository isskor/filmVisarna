const express = require('express');
const cors = require('cors');
const d = require('./data.json');
const axios = require('axios');
const showtimes = require('./showtimes.json');
const movies = require('./data.json');
const server = express();
server.use(cors());
server.use(express.json());

const port = process.env.PORT || 8000;

const router = express.Router();

router.get('/', async (req, res, next) => {
  //   const query = [
  //     {
  //       name: 'Dream Horse ',
  //       trailer: 'https://www.youtube.com/watch?v=ty_DAhC_CLc',
  //     },
  //     { name: 'The Dry', trailer: 'https://www.youtube.com/watch?v=VubvW5f6kro' },
  //     {
  //       name: 'space jam: a new legacy',
  //       trailer: 'https://www.youtube.com/watch?v=olXYZOsXw_o',
  //     },
  //     {
  //       name: 'Favolacce',
  //       trailer: 'https://www.youtube.com/watch?v=lOfwpdHKPaQ',
  //     },
  //     {
  //       name: 'No Time to Die',
  //       trailer: 'https://www.youtube.com/watch?v=vw2FOYjCz38',
  //     },
  //     {
  //       name: 'american fighter',
  //       trailer: 'https://www.youtube.com/watch?v=b7grLW9U7N4',
  //     },
  //     {
  //       name: 'new order',
  //       trailer: 'https://www.youtube.com/watch?v=9ZlrnTB2vkc',
  //     },
  //     {
  //       name: 'Venom: Let There Be Carnage',
  //       trailer: 'https://www.youtube.com/watch?v=-ezfi6FQ8Ds',
  //     },
  //     {
  //       name: 'godzilla vs. kong',
  //       trailer: 'https://www.youtube.com/watch?v=odM92ap8_c0',
  //     },
  //     {
  //       name: 'the unholy',
  //       trailer: 'https://www.youtube.com/watch?v=NmQiJPLYzPI',
  //     },
  //     {
  //       name: 'french exit',
  //       trailer: 'https://www.youtube.com/watch?v=bqMJeE15YiA',
  //     },
  //     {
  //       name: 'every breath you take',
  //       trailer: 'https://www.youtube.com/watch?v=tlMByNo3g8M',
  //     },
  //     {
  //       name: 'chaos walking}',
  //       trailer: 'https://www.youtube.com/watch?v=nRf4ZgzHoVw',
  //     },
  //     {
  //       name: 'raya and the last dragon',
  //       trailer: 'https://www.youtube.com/watch?v=1VIZ89FEjYI',
  //     },
  //     {
  //       name: 'The Matrix 4 ',
  //       trailer: 'https://www.youtube.com/watch?v=PkhXLgu-mYM',
  //     },
  //     {
  //       name: 'the world to come',
  //       trailer: 'https://www.youtube.com/watch?v=RhQu4tcHLeU',
  //     },
  //     {
  //       name: 'the father',
  //       trailer: 'https://www.youtube.com/watch?v=4TZb7YfK-JI',
  //     },
  //     {
  //       name: 'cosmic sin',
  //       trailer: 'https://www.youtube.com/watch?v=MNxsB6o6DJs',
  //     },
  //     {
  //       name: 'Spider-Man: No Way Home ',
  //       trailer: 'https://www.youtube.com/watch?v=r7M-XNGT5G0',
  //     },
  //     {
  //       name: 'spirit untamed',
  //       trailer: 'https://www.youtube.com/watch?v=9jG1nnQGpdI',
  //     },
  //     {
  //       name: 'come true',
  //       trailer: 'https://www.youtube.com/watch?v=Hh3s-Fq-3Hs',
  //     },
  //     {
  //       name: 'a quiet place part ii',
  //       trailer: 'https://www.youtube.com/watch?v=BpdDN9d9Jio',
  //     },
  //     {
  //       name: 'the courier',
  //       trailer: 'https://www.youtube.com/watch?v=oeYElSu3gEc',
  //     },
  //     {
  //       name: 'sas: red notice',
  //       trailer: 'https://www.youtube.com/watch?v=hRuUB6RKExQ',
  //     },
  //     { name: 'cruella', trailer: 'https://www.youtube.com/watch?v=gmRKv7n2If8' },
  //     { name: 'happily', trailer: 'https://www.youtube.com/watch?v=nagyNvw5Dmk' },
  //   ];
  //   const price = [120, 140, 160];
  //   let data = [];
  //   for (let i = 0; i < query.length; i++) {
  //     try {
  //       const response = await axios.get(
  //         `https://www.omdbapi.com/?apikey=64d07396&t=${query[i].name}`
  //       );
  //       //   console.log(response.data);
  //       const p = price[Math.floor(Math.random() * 3)];
  //       console.log(data.length);
  //       data.push({ ...response.data, price: p, trailer: query[i].trailer });
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   }
  //   res.json(data);

  let date1 = new Date('jun 24, 2021');
  let date2 = new Date('aug 24, 2021');

  console.log(date1);
  console.log(date2);

  dates = [];
  for (let i = 0; date1 <= date2; i++) {
    let d = new Date(date1).toDateString();
    for (let j = 0; j < 3; j++) {
      let times = [17.0, 19.0, 21.0];
      dates.push({ date: d, time: times[j] });
    }

    date1.setDate(date1.getDate() + 1);
  }
  console.log(dates);

  // console.log(showtimes.length);
  // let shows = [];
  // for (let i = 0; i < showtimes.length; i++) {
  //   let m = movies[Math.floor(Math.random() * movies.length)];
  //   let d = showtimes[i];

  //   let m2 = movies.filter((mov) => mov !== m)[
  //     Math.floor(Math.random() * movies.length)
  //   ];

  //   shows.push(
  //     { date: d, movie: m, saloon: 1 },
  //     { date: d, movie: m2, saloon: 2 }
  //   );
  // }

  res.json(dates);
  // console.log(dates);
});

server.use(router);

server.listen(port, () => console.log('listening to' + port));
