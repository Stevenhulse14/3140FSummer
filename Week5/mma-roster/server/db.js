const { Pool } = require("pg");
require("dotenv").config();

// Connect Express → PostgreSQL with a pg Pool
// Use process.env.DATABASE_URL from .env

const pool = new Pool({
  // connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
