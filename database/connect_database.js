const {Pool} = require("pg");
require('dotenv').config();

const pool = new Pool({
  user: process.env.DATABASE_SUPERUSER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE,
  password: process.env.DATABASE_SUPERUSER_PASSWORD,
  port: process.env.DATABASE_PORT,
})

module.exports = pool;