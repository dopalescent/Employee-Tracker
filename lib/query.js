const inquirer = require('inquirer');
const db = require('./connection');
const cTable = require('console.table');


const viewAllDepartments = () => {
  db.promise().query('SELECT * FROM department')
    .then(([rows, fields]) => {
      console.table(rows);
    })
    .catch((err) => {
      console.error('Error: ', err)
    })
    .then(() => db.end())
}

const viewAllRoles = () => {
  db.promise().query('SELECT * FROM role')
    .then(([rows, fields]) => {
      console.table(rows);
    })
    .catch((err) => {
      console.error('Error: ', err)
    })
    .then(() => db.end());
}

const viewAllEmployees = () => {
  db.promise().query('SELECT * FROM employee')
    .then(([rows, fields]) => {
      console.table(rows);
    })
    .catch((err) => {
      console.error('Error: ', err)
    })
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
      .then(console.log('Role added to database.'))
      .then(() => db.end());
  })
}

const addEmployee = () => {
  inquirer.prompt([
    {
      name: 'firstName',
      type: 'input',
      message: "Enter employee's first name:"
    },
    {
      name: 'lastName',
      type: 'input',
      message: "Enter employee's first name:"
    },
    {
      name: 'roleId',
      type: 'input',
      message: 'Enter role id:'
    },
    {
      name: 'managerId',
      type: 'input',
      message: 'Enter manager id:'
    }
  ]).then((answers) => {
    const { firstName, lastName, roleId, managerId } = answers;
    db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( ?, ?, ?, ? )`, [firstName, lastName, roleId, managerId])
      .catch((err) => {
        console.error('Error: ', err)
      })
      .then(console.log('Employee added to database.'))
      .then(() => db.end());
  })
}

const updateEmployeeRole = () => {
  inquirer.prompt([
    {
      name: 'employeeId',
      type: 'input',
      message: 'Enter employee id:'
    },
    {
      name: 'newRoleId',
      type: 'input',
      message: 'Enter role id for new role:'
    }
  ]).then((answers) => {
    const { employeeId, newRoleId } = answers;
    db.promise().query(`UPDATE employee SET role_id = ? WHERE id = ?`, [newRoleId, employeeId])
      .catch((err) => {
        console.error('Error: ', err)
      })
      .then(console.log('Employee role updated in database.'))
      .then(() => db.end());
  })
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