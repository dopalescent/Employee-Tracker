const inquirer = require('inquirer');
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
  inquirer.prompt([
    {
      name: 'deptAdd',
      type: 'input',
      message: 'Enter department name:'
    }
  ]).then((answers) => {
    const { deptAdd } = answers;
    // db.promise().query(`INSERT INTO department (name) VALUES ( ? )`, [deptAdd]);
    db.promise().query('INSERT INTO department (name) VALUES ( ? )', [deptAdd])
      .catch((err) => {
        console.error('Error: ', err)
      })
      .then(console.log('Department added to database.'))
      .then(() => db.end());
  })
}

const addRole = () => {
  inquirer.prompt([
    {
      name: 'title',
      type: 'input',
      message: 'Enter role title:'
    },
    {
      name: 'salary',
      type: 'input',
      message: 'Enter role salary:'
    },
    {
      name: 'deptId',
      type: 'input',
      message: 'Enter department id for role:'
    }
  ]).then((answers) => {
    const { title, salary, deptId } = answers;
    db.promise().query('INSERT INTO role (title, salary, department_id) VALUES ( ?, ?, ? )', [title, salary, deptId])
      .catch((err) => {
        console.error('Error: ', err)
      })
      .then(console.log('Department added to database.'))
      .then(() => db.end());
  })
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
