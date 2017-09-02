
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("movie-achive", table => {
    table.increments("id");
    table.string("title").unique();
    table.string("release_date");
    table.text("description");
    table.text("link");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("movie-archive");
};
