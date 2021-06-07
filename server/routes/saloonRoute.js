const express = require('express');

const router = express.Router();

// controllers

const { createSaloon, getSaloon } = require('../controllers/saloonController');

// routes

// router.post('/saloon', createSaloon);
router.post('/saloon', getSaloon);
// router.get("/movies/:id", getMovieById);

// export
module.exports = router;
