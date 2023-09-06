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

const viewAllRoles = () => {
  db.query('SELECT * FROM role', function (err, results) {
    console.table(results);
  })
};

const viewAllEmployees = () => {
  db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
  })
};

const addDepartment = () => {
  const deptAdd = 'Test Department';
  db.query(`INSERT INTO department (name) VALUES ( ? )`, [deptAdd]);
};

const addRole = () => {
  const title = 'Test Title';
  const salary = 12345.67;
  const deptId = 2;
  db.query(`INSERT INTO role (title, salary, department_id) VALUES ( ?, ?, ? )`, [title, salary, deptId]);
};

const addEmployee = () => {
  const firstName = 'Testy';
  const lastName = 'Testy';
  const roleId = 4;
  const managerId = 1;
  db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( ?, ?, ?, ? )`, [firstName, lastName, roleId, managerId]);
};

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

addDepartment();
viewAllDepartments();
addRole();
addEmployee();
viewAllRoles();
viewAllEmployees();
