const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//const promptUser = require('./utils/prompts');
const generateHTML = require('./src/page-template');
const writeFile = require('./utils/generate-files');

function promptUser() {
    return new Promise((resolve, reject) => {
        const teamData = [];
        const mike = {
            name: 'Michael Scott',
            id: '69',
            email: 'worldsgreatestboss@dundermifflin.com',
            officeNum: '570-440-8888'
        }
        const dwight = {
            name: 'Dwight Schrute',
            id: '7',
            email: 'dwight@dundermifflin.com',
            github: '570-440-8889'
        }
        const ryan = {
            name: 'Ryan Howard',
            id: '9',
            email: 'ryan@woof.com',
            school: 'School of Life'
        }
        teamData.push(new Manager(mike));
        teamData.push(new Engineer(dwight));
        teamData.push(new Intern(ryan));

        resolve(teamData);
    })
}

function init() {
    promptUser()
    .then(teamData => {
        return generateHTML(teamData);
    })
    .then(pageHTML => {
        return writeFile('./dist/index.html', pageHTML)
    }).then(writeFileResponse => {
        console.log(writeFileResponse);
    });
}

init();