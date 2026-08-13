const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "profsteve", // your mac username / psql role
  host: "localhost",
  database: process.env.database,
  password: process.env.password, // usually blank for local Homebrew Postgres
  port: 5432,
});

module.exports = pool;
