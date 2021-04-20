const makeCards = teamInfo => {

  const manager = teamInfo.manager.map(function (hire) {
    let mngrBoiler = `
    <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h4 class="card-title">${hire.name}</h4>
        <h5 class="card-text">Title: Lead Manager</h5>
        <i class="fas fa-briefcase"></i>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${hire.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${hire.email}" class="card-link">${hire.email}</a></li>
        <li class="list-group-item">Office Number: ${hire.officeId}</li>
      </ul>
    </div>
  </div>
    `
    return mngrBoiler
  });

  const engineer = teamInfo.engineer.map(function (hire) {
    let engBoiler = `
    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">${hire.name}</h4>
          <h5 class="card-text">Title: Engineer</h5>
          <i class="fas fa-user-cog"></i>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${hire.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${hire.email}" class="card-link">${hire.email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${hire.gitHub}" target="_blank" class="card-link">${hire.gitHub}</a></li>
        </ul>
      </div>
    </div>
    `
    return engBoiler
  });

  const intern = teamInfo.intern.map(function(hire) {
    let intBoiler = `
    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">${hire.name}</h4>
          <h5 class="card-text">Title: Intern</h5>
          <i class="fas fa-user-graduate"></i>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${hire.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${hire.email}" class="card-link">${hire.email}</a></li>
          <li class="list-group-item">School: ${hire.school}</li>
        </ul>
      </div>
    </div>
    `
    return intBoiler
  })
  return [manager.join(''), engineer.join(''), intern.join('')]
}

module.exports = data => {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
      
    <link href="../dist/style.css" rel="stylesheet" />
    <title>The Team</title>
  </head>
  <body>
    <header>
      <h1 class="head">MY TEAM</h1>
    </header>
    <div class="row row-cols-auto row-cols-md-3 g-4">
    ${makeCards(data).join('')}
  </body>
  </html>
  `
}