const inquirer = require('inquirer');
// const mysql = requre('mysql2');
// const cTable = require('console.table');

const {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
} = require('./lib/query');


function init() {
  inquirer
    .prompt([
      {
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ]
      }
    ])
    .then((answer) => {
      switch (answer.action) {
        case "View all departments":
          console.log(answer.action);
          viewAllDepartments();
          // init();
          break;
        case "View all roles":
          console.log(answer.action);
          viewAllRoles();
          // init();
          break;
        case "View all Employees":
          console.log(answer.action);
          viewAllEmployees();
          // init();
          break;
        case "Add a department":
          console.log(answer.action);
          addDepartment();
          // init();
          break;
        case "Add a role":
          console.log(answer.action);
          break;
        case "Add an employee":
          console.log(answer.action);
          // init();
          break;
        case "Update an employee role":
          console.log(answer.action);
          // init();
          break;
      }
    })
};

init();
// viewAllEmployees();