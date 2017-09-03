module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/movie-list"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
