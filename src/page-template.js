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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>My Team</title>
</head>

<body>
${generateTeamMemberCards(teamData)}

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`;    
}

module.exports = generateHTML;