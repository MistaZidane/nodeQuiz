var fs = require('fs');
var ekoleVote = fs.readdirSync('voted/Ekolle Empower Us');
var estelleVote = fs.readdirSync('voted/Yomba Youth Development Movement');
var nfebeVote = fs.readdirSync('voted/Nfebe Fundamentals Must Change');
var laslieVote = fs.readdirSync('voted/Laslie Na We We Movement');
var registered = fs.readdirSync('voters');
var numberRegistered = 0;
registered.forEach((file)=>{
    numberRegistered++
})
var numberOfVotesEkole = 0;
ekoleVote.forEach((file,index)=>{
    numberOfVotesEkole++;
})
var numberOfVotesEstelle = 0;
estelleVote.forEach((file,index)=>{
    numberOfVotesEstelle++;
})
var numberOfVotesNfebe = 0;
nfebeVote.forEach((file,index)=>{
    numberOfVotesNfebe++;
})
var numberOfVotesLaslie = 0;
laslieVote.forEach((file,index)=>{
    numberOfVotesLaslie++;
})
exports.stat = `<!DOCTYPE html>
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
                        <th scope="col">YYDM</th>
                        <th scope="col">NFMC</th>
                        <th scope="col">EEU</th>
                        <th scope="col">LNWWM</th>
                        <th scope="col">Total voters</th>
                        <th scope="col">Total registered</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>${numberOfVotesEstelle}</td>
                        <td>${numberOfVotesNfebe}</td>
                        <td>${numberOfVotesEkole}</td>
                        <td>${numberOfVotesLaslie}</td>
                        <td>${numberOfVotesLaslie+numberOfVotesNfebe+numberOfVotesEstelle+numberOfVotesEkole}</td>
                        <td>${numberRegistered}</td>
                      </tr>
                     
                    </tbody>
                  </table>
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>
</body>
</html>`