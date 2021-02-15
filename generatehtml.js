function createCard(data){
    let cardText = "";

    for (let i = 0; i  < data.length; i++) {
    let newCard = `<div class="card" style="width: 18rem;">
    <h1>Engineer</h1>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: </li>
      <li class="list-group-item">Email: </li>
      <li class="list-group-item">Github: </li>
    </ul>
    </div>
  </div>`

  cardText += newCard
    }
        return cardText;
}



function generateHtml(){
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <title>Team of Web Dev's</title>
</head>

<body>

    <div class="container-fluid">
        <h1>Team of Web Dev's</h1>

    </div>
    // call card text here ( function )

</body>

</html>
    `
}