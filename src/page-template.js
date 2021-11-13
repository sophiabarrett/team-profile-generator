function generateTeamMemberCards(teamData) {
    return `${teamData.filter(( teamMember ) => teamMember.getRole() === 'Manager')
        .map(( manager ) => {
            return `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card m-2 p-2">
                    <h2>${ manager.getName() }</h2>
                    <h3>${ manager.getRole() }</h3>
                </div>
            </div>`;
        })}

        ${teamData.filter(( teamMember ) => teamMember.getRole() === 'Engineer')
        .map(( engineer ) => {
            return `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card m-2 p-2">
                    <h2>${ engineer.getName() }</h2>
                    <h3>${ engineer.getRole() }</h3>
                </div>
            </div>`;
        })
        .join('')}

        ${teamData.filter(( teamMember ) => teamMember.getRole() === 'Intern')
        .map(( intern ) => {
            return `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card m-2 p-2">
                    <h2>${ intern.getName() }</h2>
                    <h3>${ intern.getRole() }</h3>
                </div>
            </div>`;
        })
        .join('')}
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

    <header class="container-fluid p-5 bg-primary">
        <h1 class="text-light text-center">My Team</h1>
    </header>

    <main class="container-md my-5">
        <div class="row justify-content-center">
            ${generateTeamMemberCards(teamData)}
        </div>
    </main>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`;    
}

module.exports = generateHTML;