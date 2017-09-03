const express = require('express');
const queries = require('./db/queries');

const router = express.Router();

router.get('/all', (req, res) => {
  queries.getAll().then(movies => {
    res.json({
      'movies': movies
    });
  });
});

router.get('/not_watched', (req, res) => {
  queries.getNotWatched().then(movies => {
    res.json({
      'movies': movies
    });
  });
});

router.get('/not_watched/:id', (req, res) => {
  queries.getOneNotWatched(req.params.id).then(movie => {
    res.json({
      'movies': movie
    });
  });
});

router.get('/all/:id', (req, res) => {
  queries.getOne(req.params.id).then(movie => {
    res.json({
      'movie': movie
    });
  });
});

router.get('/:genre', (req, res) => {
  queries.getByGenre(req.params.genre).then(movies => {
    res.json({
      'movies': movies
    });
  });
});

router.post('/addMovie', (req, res, next) => {
  queries.create(req.body).catch(() => res.json({
    "message": "already exist"
  }));
});

router.put('/:title', (req, res) => {
  queries.markAsWatched(req.params.title).then(message => res.json(message));
})

module.exports = router;
