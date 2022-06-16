const generateHTMLPage = (allEmployeeCards) => {
    return
    `<!DOCTYPE html>
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
        
        <header>
            <!-- add in a navbar -->
            <h2>Your Team</h2>
        </header>
    
        <section>
            <!-- Contains all employee cards -->
            <div class="card-group">
                ${allEmployeeCards}
            </div>
        </section>
    </body>
    </html>`
};

const createManagerCard = (manager) => {
    `<div class="card">
        <h2>${manager.managerName}</h2>
        <h3>Manager</h3>
        <ul>
            <li>${manager.managerID}</li>
            <li><a href="mailto:${manager.managerEmail}">Email: ${manager.managerEmail}</a></li>
            <li>Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>`
};

const createEngineerCard = (engineer) => {
    `<div class="card">
        <h2>${engineer.employeeName}</h2>
        <h2>Engineer</h2>
        <ul>
            <li>ID: ${engineer.employeeId}</li>
            <li><a href="mailto:${engineer.employeeEmail}">Email: ${engineer.employeeEmail}</a></li>
            <li><a href="https://github.com/${engineer.github}">GitHub: ${engineer.github}</a></li>
        </ul>
    </div>`
};

const createInternCard = (intern) => {
    `<div class="card">
        <h2>${intern.employeeName}</h2>
        <h2>Engineer</h2>
        <ul>
            <li>ID: ${intern.employeeId}</li>
            <li><a href="mailto:${intern.employeeEmail}">Email: ${intern.employeeEmail}</a></li>
            <li>School: ${intern.school}</li>
        </ul>
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