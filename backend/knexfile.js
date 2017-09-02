module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/movie-night"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
