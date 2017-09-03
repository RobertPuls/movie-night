const knex = require('./knex');

module.exports = {
  getAll() {
    return knex("movies");
  },
  getOne(id) {
    return knex("movies").where("id", id).first();
  },
  getByGenre(genre) {
    return knex("movies").where({
      "genre": genre,
      "watched": false
    });
  },
  getNotWatched() {
    return knex("movies").where("watched", false);
  },
  getOneNotWatched(id) {
    return knex("movies").where("id", id).where("watched", false).first();
  },
  create(movie_item) {
    return knex("movies").insert(movie_item);
  },
  markAsWatched(title) {
    return knex("movies").where("title", title).update("watched", true)
  }
};
