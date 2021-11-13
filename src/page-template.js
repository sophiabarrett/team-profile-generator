function generateTeamMemberCards(teamData) {
    return `
    <section>
        ${teamData
            .filter(({ role }) => role === 'Manager')
            .map(({ name, id, email, officeNum }) => {
                return `
                <h2>${name}</h2>
                <h3>Manager</h3>
                `
            })}

        ${teamData
            .filter(({ role }) => role === 'Engineer')
            .map(({ name, id, email, github }) => {
                return `
                <h2>${name}</h2>
                <h3>Engineer</h3>
                `
            })
            .join('')}

        ${teamData
            .filter(({ role }) => role === 'Intern')
            .map(({ name, id, email, school }) => {
                return `
                <h2>${name}</h2>
                <h3>Intern</h3>
                `
            })
            .join('')}
    </section
`;
}

function generateHTML(teamData) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${generateTeamMemberCards(teamData)}
</body>
</html>`;    
}

module.exports = generateHTML;