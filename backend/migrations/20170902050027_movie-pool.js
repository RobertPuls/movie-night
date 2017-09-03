exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("movies", table => {
      table.increments("id");
      table.string("title").unique();
      table.string('genre');
      table.string("release_date");
      table.text("description");
      table.text("link");
      table.boolean("watched").defaultTo(false).notNull()
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("movies");
};
