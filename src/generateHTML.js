const generateHTMLPage = (allEmployeeCards) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        
        <header class="bg-success bg-gradient p-5">
            <h2 class="text-center fw-bolder">Your Team</h2>
        </header>
    
        <section class="container mt-5">
            <div class="row row-cols-4 card-group justify-content-between">
                ${createPage()}
            </div>
        </section>
    </body>
    </html>`
};

const createManagerCard = (manager) => {
    `<div>
        <div class="card p-0 border-dark border-2 rounded-3">
            <h2 class="card-title fw-bold text-center bg-success bg-opacity-50 p-2">${manager.managerName}</h2>
            <h3 class="text-center">Manager</h3>
            <ul class="text-center list-group border-0">
                <li class="list-group-item border-0">${manager.managerID}</li>
                <li class="list-group-item border-0"><a href="mailto:${manager.managerEmail}">${manager.managerEmail}</a></li>
                <li class="list-group-item border-0">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>`
};

const createEngineerCard = (engineer) => {
    `<div>
        <div class="card p-0 border-dark border-2 rounded-3">
            <h2 class="card-title fw-bold text-center bg-success bg-opacity-50 p-2">${engineer.employeeName}</h2>
            <h3 class="text-center">Engineer</h3>
            <ul class="text-center list-group border-0">
                <li class="list-group-item border-0">${engineer.employeeId}</li>
                <li class="list-group-item border-0"><a href="mailto:${engineer.engineerEmail}">${engineer.engineerEmail}</a></li>
                <li class="list-group-item border-0"><a href="https://github.com/maggiejoe">GitHub: ${engineer.github}</a></li>
            </ul>
        </div>
    </div>`
};

const createInternCard = (intern) => {
    `<div>
        <div class="card p-0 border-dark border-2 rounded-3">
            <h2 class="card-title fw-bold text-center bg-success bg-opacity-50 p-2">${intern.employeeName}</h2>
            <h3 class="text-center">Intern</h3>
            <ul class="text-center list-group border-0">
                <li class="list-group-item border-0">${intern.employeeId}</li>
                <li class="list-group-item border-0"><a href="mailto:${intern.employeeEmail}">${intern.employeeEmail}</a></li>
                <li class="list-group-item border-0">School: ${intern.school}</li>
            </ul>
        </div>
    </div>`
};

createPage = (pageData) => {
    pageArr = [];

    for (i = 0; i < pageData.length; i++) {
        const employee = pageData[i];
        const employeeRole = employee.getRole();

        if (employeeRole === manager) {
            const managerCard = createManagerCard(employee);

        PageArr.push(managerCard);
        }

        if (employeeRole === engineer) {
            const engineerCard = createEngineerCard(employee);

        PageArr.push(engineerCard);
        }

        if (employeeRole === Intern) {
            const internCard = createInternCard(employee);

        PageArr.push(internCard);
        }
    }

    const allEmployeeCards = pageArr.join('')

    const generateEmployees = generateHTMLPage(allEmployeeCards);
    return generateEmployees;
};

module.exports = generateHTMLPage;