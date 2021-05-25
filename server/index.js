const express = require("express");
const session = require("express-session");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");
const server = express();
const movieRoutes = require("./routes/movieRoute");
const userRoutes = require("./routes/userRoutes");
const showTimesRoutes = require('./routes/showTimesRoute');
const saloonRoutes = require('./routes/saloonRoute');
const bookingRoutes = require('./routes/bookingRoutes');
server.use(cors());
server.use(express.json());

server.use(
  session({
    secret: "veni vidi vici",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto" },
  })
);

mongoose
  .connect(
    "mongodb+srv://filmVisarna:filmVisarna@cinemacluster.dsbop.mongodb.net/cinema",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

server.use("/api", movieRoutes);
server.use("/api/users", userRoutes);
server.use('/api/showtimes', showTimesRoutes);
server.use('/api', saloonRoutes);
server.use('api/bookings', bookingRoutes);

server.listen(3001, () => console.log("listening to" + 3001));
