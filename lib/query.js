const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Existence700!",
  database: "tracker_db"
}, console.log('connected to database')
);

const viewAllDepartments = () => {
  db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
  })
};

// const viewAllRoles = () => {

// };

// const viewAllEmployees = () => {

// };

// const addDepartment = () => {

// };

// const addRole = () => {

// };

// const addEmployee = () => {

// };

// const updateEmployeeRole = () => {

// };

// module.exports = {
//   viewAllDepartments,
//   viewAllRoles,
//   viewAllEmployees,
//   addDepartment,
//   addRole,
//   addEmployee,
//   updateEmployeeRole
// };


viewAllDepartments();