const inquirer = require('inquirer');
const fs = require('fs');

const employee = require('./lib/Employee')
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');

const employeeArr = [];

const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter Managers name',
            validate: managerName => {
                if (managerName) {
                    return true
                } else {
                    console.log('You must enter the Managers name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter Managers Id',
            validate: managerId => {
                if (managerId) {
                    return true
                } else {
                    console.log('You must enter the Managers Id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter Managers Email',
            validate: managerEmail => {
                if (managerEmail) {
                    return true
                } else {
                    console.log('You must enter the Managers Email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter Managers office number',
            validate: officeNumber => {
                if (officeNumber) {
                    return true
                } else {
                    console.log('You must enter the Managers ofifce number');
                    return false;
                }
            }
        },
    ])
    .then (managerData => {
        const { managerName, managerId, managerEmail, officeNumber } = managerData;
        const manager = new Manager (managerName, managerId, managerEmail, officeNumber);

        employeeArr.push(manager);
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Enter employees name',
            validate: employeeName => {
                if (employeeName) {
                    return true
                } else {
                    console.log('You must enter an Employee Name');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'employeeRole',
            message: 'What is this employees role?',
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employees id',
            validate: employeeId => {
                if (employeeId) {
                    return true
                } else {
                    console.log('You must enter an Employee Id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Enter employees email',
            validate: employeeEmail => {
                if (employeeEmail) {
                    return true
                } else {
                    console.log('You must enter an Employee Email');
                    return false;
                }
            }
        }
    ])
}