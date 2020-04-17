var fs = require('fs');
var voters = fs.readdirSync('voters');
let html = '';
voters.forEach((file)=>{
  let userFile = fs.readFileSync(`voters/${file}`)
  let user = JSON.parse(userFile.toString())
  html+= ` <tr>
  <td>${user.name}</td>
  <td>${user.password}</td>
  <td>${user.gender}</td>
</tr>
`
})
exports.voters = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
        <a class="navbar-brand" href="#">Sevenkistan</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="/statistics">Statictics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/viewVoters">voters</a>
          </li>
      </ul>
        </div>
    </div>
      </nav>
    <div class="container">
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
                <h1>statistics</h1>
                <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">name</th>
                        <th scope="col">password</th>
                        <th scope="col">gender</th>
                      </tr>
                    </thead>
                    <tbody>
                     ${html}
                    </tbody>
                  </table>
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>
</body>
</html>`