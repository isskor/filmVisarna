const express = require('express');
const mongoose = require('mongoose');
let session = require('express-session');
var MongoDBStore = require('connect-mongo');
const cors = require('cors');
const server = express();
const movieRoutes = require('./routes/movieRoute');
const userRoutes = require('./routes/userRoutes');
const showTimesRoutes = require('./routes/showTimesRoute');
const saloonRoutes = require('./routes/saloonRoute');

server.use(cors({ credentials: true, origin: true }));
server.use(express.json());

server.use(express.urlencoded({ extended: true }));

const dbUrl =
  'mongodb+srv://filmVisarna:filmVisarna@cinemacluster.dsbop.mongodb.net/cinema';

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('db connected');
  })
  .catch((err) => console.log(err));

let store = new MongoDBStore({
  mongoUrl: dbUrl,
});

server.use(
  session({
    secret: 'SECRET KEY',
    resave: true,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  })
);

server.use('/api', movieRoutes);
server.use('/api', showTimesRoutes);
server.use('/api', saloonRoutes);
server.use('/api/users', userRoutes);

server.listen(3001, () => console.log('listening to' + 3001));
