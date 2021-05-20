const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const server = express();
const movieRoutes = require('./routes/movieRoute');
server.use(cors());
server.use(express.json());

mongoose
  .connect(
    'mongodb+srv://filmVisarna:filmVisarna@cinemacluster.dsbop.mongodb.net/cinema',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('db connected'))
  .catch((err) => console.log(err));

server.use('/api', movieRoutes);

server.listen(3001, () => console.log('listening to' + 3001));
