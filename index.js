const promptUser = require('./utils/prompts');
const generateHTML = require('./src/page-template');
const writeFile = require('./utils/generate-files');

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