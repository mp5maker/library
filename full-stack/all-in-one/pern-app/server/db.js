const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "123",
  host: "localhost",
  port: 5432,
  database: "pern_todo"
})

module.exports = pool