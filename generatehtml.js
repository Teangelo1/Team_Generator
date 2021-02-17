function newCards(webDevs){
    let blankCard = "";
    for (let s = 0; s < webDevs.length; s++) {
      switch(webDevs[s].getRole()){
        case "Manager":
          blankCard = blankCard.concat(  `
          <div class="card card-custom" style="width: 18rem;">
          <h2>Mangager</h2>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${webDevs[s].name}</li>
            <li class="list-group-item">ID: ${webDevs[s].id}</li>
            <li class="list-group-item">Email: ${webDevs[s].email}</li>
            <li class="list-group-item">Office Number:</li>
          </ul>
        </div>`)
         break;

        case "Engineer":
          blankCard = blankCard.concat(  `
          <div class="card card-custom" style="width: 18rem;">
          <h2>Engineer</h2>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${webDevs[s].name}</li>
            <li class="list-group-item">ID: ${webDevs[s].id}</li>
            <li class="list-group-item">Email:${webDevs[s].email}</li>
            <li class="list-group-item">Github:${webDevs[s].github}</li>
          </ul>
        </div>`)
       break;

       case "Intern":
          blankCard = blankCard.concat(  `
          <div class="card card-custom" style="width: 18rem;">
          <h2>Intern</h2>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${webDevs[s].name}</li>
            <li class="list-group-item">ID: ${webDevs[s].id}</li>
            <li class="list-group-item">Email: ${webDevs[s].email}</li>
            <li class="list-group-item">School: ${webDevs[s].school}</li>
          </ul>
        </div>`)
       break;
}
  }
  return blankCard;

  }
function generateHtml(webDevs){
  
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
        <link href="./src/style.css" rel="stylesheet" type="text/css">
    <title>Team of Web Dev's</title>
</head>

<body>
    
              <h1>Team Of Web Devs</h1>

      <div class=" flexbox-container">
        <div class="row">
      

        ${newCards(webDevs)}
        </div>
        </div>
        
        </div>

    

    <script src="../generatehtml.js"></script>
</body>

</html>`

}

module.exports = generateHtml;