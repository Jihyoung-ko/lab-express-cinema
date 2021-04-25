const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js'); 

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {

  Movie.find({})
    .then(movies => {
      // console.log('All movies:', movies);
      res.render('movies', { movies }); 
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
      next(error);
    });
});

router.get('/movies/:id', (req, res, next) => {
  const { id } = req.params;

  Movie.findById(id)
    .then(movie => {
      // console.log('Details of the movie:', movie);
      res.render('movie-detail', {movie})
    })
    .catch(error => {
      console.log('Error while retrieving movie details', error);
      next(error);
    });
});

module.exports = router;
