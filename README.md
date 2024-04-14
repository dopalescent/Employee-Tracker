# Employee-Tracker

  ![License](https://img.shields.io/badge/License-MIT-blue)

  ## Description
  Employee-Tracker is a database application for structural organization of information. Department, role, and employee information can be viewed and added, and employee roles can be updated. These changes are all executed from the command line, and will persist between uses of the application.
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  Clients can make use of this application by cloning it from its repository. They will need to perform a package install, then use MYSQL to source the schema file.
  
  ## Usage
  A visual demonstration of this application's usage can be found at the following:
  https://drive.google.com/file/d/16-GKv2AA7b_dbTcNFK9NFUlYOotAIsIY/view?usp=sharing

  After running "npm i" and sourcing the appropriate ".sql" files, launch the application by entering "npm start" into the command line. A list of operations will appear, and you will be prompted to select one using the up and down arrow keys. The options are as follows:
  ### View all departments
  The department table will be logged into the console.
  ### View all roles
  The role table will be logged into the console.
  ### View all employees
  The employee table will be logged into the console.
  ### Add a department
  You will be prompted to enter the name of the new department. On a successful submission, a message will appear in the console reading "Department added to database."
  ### Add a role
  You will be prompted to enter the name of the new role, the salary, and the department id. On a successful submission, a message will appear in the console reading "Role added to database."
  ### Add an employee
  You will be prompted to enter the employee's first name, last name, role id, and manager id. On a successful submission, a message will appear in the console reading "Employee added to database."
  ### Update an employee role
  You will be prompted to enter the the id of the employee, then the id of the new role. On a successful submission, a message will appear in the console reading "Employee role updated in database."

  ## Contributing
  Contributors: Greg Skudlarek
  
  ## License
  [![License](https://img.shields.io/badge/License-MIT-blue)](https://www.opensource.org/licenses/MIT)

  This application is covered under the MIT License. Click the badge to learn more.
  
  ## Questions
  Questions can be sent via the listed methods.
  
 
  GitHub: [dopalescent](https://github.com/dopalescent)
  

  Email: skudlgre000@gmail.com
