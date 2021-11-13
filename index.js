const promptUser = require('./utils/prompts');
const { writeHTML, copyCSS } = require('./utils/generate-files');
const generateHTML = require('./src/page-template');

function init() {
    promptUser()
    .then(teamData => {
        return generateHTML(teamData);
    })
    .then(pageHTML => {
        console.log(pageHTML);
    });
}

init();