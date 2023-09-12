const db = require('./connection');
const cTable = require('console.table');


const viewAllDepartments = () => {
  db.promise().query('SELECT * FROM department')
    .then(([rows, fields]) => {
      console.table(rows);
    })
    .catch(console.log)
    .then(() => db.end())
  // .then(init());
}

const viewAllRoles = () => {
  db.promise().query('SELECT * FROM role')
    .then(([rows, fields]) => {
      console.table(rows);
    })
    .catch(console.log)
    .then(() => db.end());
}

const viewAllEmployees = () => {
  // db.promise().query('SELECT * FROM employee', function (err, results) {
  //   console.table(results);
  // })
  db.promise().query('SELECT * FROM employee')
    .then(([rows, fields]) => {
      console.table(rows);
    })
    .catch(console.log)
    .then(() => db.end());
}

const addDepartment = () => {
  const deptAdd = 'Test Department';
  db.promise().query(`INSERT INTO department (name) VALUES ( ? )`, [deptAdd]);
}

const addRole = () => {
  const title = 'Test Title';
  const salary = 12345.67;
  const deptId = 2;
  db.promise().query(`INSERT INTO role (title, salary, department_id) VALUES ( ?, ?, ? )`, [title, salary, deptId]);
}

const addEmployee = () => {
  const firstName = 'Testy';
  const lastName = 'Testy';
  const roleId = 4;
  const managerId = 1;
  db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( ?, ?, ?, ? )`, [firstName, lastName, roleId, managerId]);
}

const updateEmployeeRole = () => {
  const newRoleId = 2;
  const employeeId = 3;
  db.promise().query(`UPDATE employee SET role_id = ? WHERE id = ?`, [newRoleId, employeeId]);
}

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
};

// addDepartment();
// addRole();
// addEmployee();
// viewAllDepartments();
// viewAllRoles();
// updateEmployeeRole();
// viewAllEmployees();
