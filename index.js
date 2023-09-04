const inquirer = require('inquirer');
const mysql = requre('mysql2');
const cTab = require('console.table');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Existence700!",
  database: "tracker_db"
},
  console.log('Connected to database.')
);