const inquirer = require('inquirer');
const fs = require('fs');

const createHTML = require('./src/generateHTML');

// const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { create } = require('domain');
const { listenerCount } = require('process');

const employeeArr = [];

const mainMenu = () => {
    inquirer.prompt({
        type: 'list',
        name: 'direction',
        message: 'What type of employee would you like to create?',
        choices: ['Manager', 'New Employee', 'Exit']
    })
    .then (({ direction }) => {
        // console.log(responses);
        if (direction === 'Manager') {
            addManager();
        } else if (direction === 'New Employee') {
            addEmployee();
        }
        else {
            writeFile(employeeArr);
        }
    })
}

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
    .then (managerObj => {
        const { managerName, managerId, managerEmail, officeNumber } = managerObj;
        const manager = new Manager (managerName, managerId, managerEmail, officeNumber);

        employeeArr.push(manager);
        console.log(employeeArr);
        mainMenu();
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
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter employees GitHub username',
            when: (employeeInput) => employeeInput.employeeRole === 'Engineer',
            validate: github => {
                if (github) {
                    return true
                } else {
                    console.log('You must enter the employees github username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter employees school',
            when: (employeeInput) => employeeInput.employeeRole === 'Intern',
            validate: school => {
                if (school) {
                    return true
                } else {
                    console.log('You must enter the employees github username');
                    return false;
                }
            }
        },
    ])
    .then(employeeObj => {
        let { employeeName, employeeRole, employeeId, employeeEmail, github, school} = employeeObj;

        let employee;

        if (employeeRole === 'Intern') {
            employee = new Intern (employeeName, employeeId, employeeEmail, school);
        } else if (employeeRole === 'Engineer') {
            employee = new Engineer (employeeName, employeeId, employeeEmail, github);
        }

        employeeArr.push(employee);
        // console.log(employee);
        mainMenu();
    })
}

const writeFile = data => {
    // console.log(data);
    fs.writeFile('./dist/index.html', createHTML(data), err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Your HTML file has been created!')
        }
    })
}

mainMenu();

// addManager()
    // .then(addEmployee)
    // .then((employeeArr) => {
    //     console.log(employeeArr);
    //     writeFile(createHTML(employeeArr));
        // return createHTML(employeeArr);
    // })
    // .then(createHTML => {
    //     return writeFile(createHTML);
    // })
    // .catch((err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    // });