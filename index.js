const inquirer = require('inquirer');

// setup employee questions
function employeeQuestions(type) {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: "Full Name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Employee ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Email:"
        },
    ];
    if (type === 'manager') {
        console.log(`
----------------
Add Team Manager:
`);
        questions.push({
            type: 'input',
            name: 'officeNum',
            message: "Office Number:"
        });
    }
        
    return questions;
}

// prompt user to add employees
function addEmployees(employees) {
    console.log('\n----------------');
    return inquirer
        .prompt({
                type: 'list',
                name: 'addOption',
                message: 'Would you like to add another person to this team?',
                choices: [
                    'Add Engineer',
                    'Add Intern',
                    "I'm done adding people. Finish building my team!"
                ]
            })
        .then(({ addOption }) => {
            if (addOption === "I'm done adding people. Finish building my team!") {
                return false;
            } else if (addOption === 'Add Engineer') {
                return 'engineer object';
            } else if (addOption === 'Add Intern') {
                return 'intern object';
            }
        })
        .then(newEmployee => {
            if (newEmployee) {
                employees.push(newEmployee);
                return addEmployees(employees);
            } else {
                return employees;
            };
        });
}

// prompt user to answer questions
function promptUser() {
    // setup team object to push all team data into
    team = {};

    return inquirer
        .prompt(employeeQuestions('manager'))
        .then(manager => {
            team.manager = manager;
            const employees = [];
            return addEmployees(employees);
        })
        .then(employees => {
            if (employees.length > 0) {
                team.employees = employees;
            }
            return team;
        });
}

// Run app
function init() {
    promptUser()
    .then(team => {
        console.log(team);
    })
}

init();