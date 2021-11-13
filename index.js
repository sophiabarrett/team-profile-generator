const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function getTeamMemberInfo(type) {
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
        }
    ];

    if (type === 'manager') {
        console.log('\n-----------------\nAdd Team Manager:');
        questions.push({
            type: 'input',
            name: 'officeNum',
            message: "Office Number:"
        });
    }

    if (type === 'engineer') {
        console.log('\n-----------------\nAdd Engineer:');
        questions.push({
            type: 'input',
            name: 'github',
            message: "GitHub Username:"
        });
    }

    if (type === 'intern') {
        console.log('\n-----------------\nAdd Intern:');
        questions.push({
            type: 'input',
            name: 'school',
            message: "School Name:"
        });
    }

    return questions;
}

function addEmployees(team) {
    console.log('\n-----------------');
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
            if (addOption === 'Add Engineer') {
                return inquirer
                    // prompt user for engineer info
                    .prompt(getTeamMemberInfo('engineer'))
                    .then(engineer => {
                        team.push(new Engineer(engineer));
                        return addEmployees(team);
                    });
            } else if (addOption === 'Add Intern') {
                return inquirer
                    // prompt user for intern info
                    .prompt(getTeamMemberInfo('intern'))
                    .then(intern => {
                        team.push(new Intern(intern));
                        return addEmployees(team);
                    });
            } else if (addOption === "I'm done adding people. Finish building my team!") {
                return team;
            }
        });
}

function promptUser() {
    // setup team array to recieve user prompts
    team = [];

    return inquirer
        .prompt(
            // prompt user for manager info
            getTeamMemberInfo('manager')
        )
        .then(manager => {
            team.push(new Manager(manager));
            // prompt user to add employees
            return addEmployees(team);
        });
}

function init() {
    promptUser()
        .then(team => {
            console.log(team);
        })
}

init();