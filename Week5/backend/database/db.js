const { Pool } = require("pg");

const pool = new Pool({
  user: "profsteve", // your mac username / psql role
  host: "localhost",
  database: "fightersdb",
  password: "", // usually blank for local Homebrew Postgres
  port: 5432,
});

module.exports = pool;
