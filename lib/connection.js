const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Existence700!",
  database: "tracker_db"
});

module.exports = db;