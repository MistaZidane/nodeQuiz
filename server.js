// reading the index.html file
let fs = require('fs');
// server 
const http = require('http');
const hostname = '127.0.0.1';
const port = 8000;
const server = http.createServer((req,res)=>{
    res.setHeader('Content-type', 'Text/html');
    fs.readFile('./index.html', null, function(err,data){
        if(err){
            res.statusCode = 404;
            res.writeHead(404);
            res.write('file not found');
        }
        else{
            res.statusCode = 200;
            res.write(data)
        }
        res.end()
    });
    
  
   // res.write('Mista Zidane')
    
});

server.listen(port,hostname, ()=>{
    console.log(`server is running at  http://${hostname}${port}/`)
});

const express = require('express');
const app = express();
// var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.post('/details', urlencodedParser, function (req, res) {
//     console.log(req.body);
//     console.log("Zidane")
//     //res.send('welcome, ' + req.body.username)
//   })