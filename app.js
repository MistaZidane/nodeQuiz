const http = require('http');
const formidable = require('formidable');
var url = require('url');
var fs = require('fs');
var zlib = require('zlib')
var event = require('events');
var stat = require('./stat')
var adminData = require('./admin')
var allVoters = require('./viewVoters')
var eventEmmiter = new event.EventEmitter();
const server = http.createServer((req, res) => {
  if (req.url === '/register' && req.method.toLowerCase() === 'post') {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
        fs.exists(`voters`,(bool)=>{
            if(bool == false){
              fs.mkdir('voters',(err)=>{
                  if(err){console.log(err)}
                  else{
                    fs.writeFile(`voters/${fields.name}.txt`,JSON.stringify(fields),(err)=>{
                        if(err){
                            console.log(err)
                        }
                    })
                  }
              })
            }
            else{
                fs.exists(`voters/${fields.name}.txt`,(fileExist)=>{
                    if(fileExist){
                        res.end('userName already registed')
                    }
                    else{
                        fs.writeFile(`voters/${fields.name}.txt`,JSON.stringify(fields),(err)=>{
                            if(err){
                                console.log(err)
                            }
                            else{
                            fs.readdir('voters',(err,files)=>{
                                files.forEach((file)=>{
                                    var readstr = fs.createReadStream(`${file}`).pipe(zlib.createGzip()).pipe(fs.createWriteStream('voters.gz'))
                                })
                            })
                              
                                res.end('user registered successfully');
                                fs.mkdir('log',(err)=>{})
                                fs.appendFile('log/log.txt',JSON.stringify({action:'created Account', name: fields.name}),(err)=>{})
                            }
                        })
                       
                    }
                })
              
            }
        })
     
    });
 
    return;
  }
  // navigating to vote
  if (req.url === '/votePage') {
   var q = url.parse(req.url, true);
   fs.readFile('html/vote.html', function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  
    return;
  }
   // navigating to register
   if (req.url === '/registerPage') {
   var q = url.parse(req.url, true);
   fs.readFile('index.html', function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  
    return;
  }
   // navigating to statistics page
   if (req.url === '/statPage') {
   var q = url.parse(req.url, true);
   
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(stat.stat);
    return res.end();
    return;
  }
   // navigating to admin page
   if (req.url === '/admin') {
    var q = url.parse(req.url, true);
    fs.readFile('html/admin.html', function(err, data) {
     if (err) {
       res.writeHead(404, {'Content-Type': 'text/html'});
       return res.end("404 Not Found");
     } 
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.write(data);
     return res.end();
   });
   
     return;
   }
      // navigating to  admin statistics page
      if (req.url === '/statistics') {
        var q = url.parse(req.url, true);
        
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(adminData.stat);
         return res.end();
         return;
       }
          // navigating to  admin page incharge of viewing all voters
      if (req.url === '/viewVoters') {
        var q = url.parse(req.url, true);
        
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(allVoters.voters);
         return res.end();
         return;
       }
 // regitering the vote
 // creating the events and the event handler responsible for voting 
 if (req.url === '/vote' && req.method.toLowerCase() === 'post') {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
        fs.exists(`voters/${fields.name}.txt`,(bool)=>{
            if(bool){
                fs.readFile(`voters/${fields.name}.txt`,(err, data)=>{
                    if(err){console.log(err)}
                    else{
                        let voter = JSON.parse(data.toString());
                        if(voter.name == fields.name && voter.password == fields.password){
                            
                            fs.exists(`voted/${fields.party}/${fields.name}.txt`, (exists)=>{
                                if(exists){
                                    res.end('you voted already')
                                }
                                else{
                                    fs.mkdir('voted',(err)=>{})
                                    fs.mkdir(`voted/${fields.party}`,(err)=>{})
                                    fs.exists(`voted/votes/${fields.name}.txt`,(bool)=>{
                                        if(bool){
                                            res.end('you voted already')
                                        }
                                        else{
                                            fs.mkdir('voted/votes',(err)=>{})
                                            fs.mkdir('log',(err)=>{})
                                            fs.appendFile('log/log.txt',JSON.stringify({action:'voted', name: fields.name, party: fields.party}),(err)=>{})
                                            fs.writeFile(`voted/votes/${fields.name}.txt`, fields.name,(err)=>{})
                                            fs.writeFile(`voted/${fields.party}/${fields.name}.txt`, fields.party,(err)=>{
                                                if(err){console.log(err)}
                                            })
                                            res.end(`You voted ${fields.party} Succesfully`);
                                        }
                                    })
                                    
                                }
                            })
                          
                        }
                        else{
                            res.end('make sure your credentials are correct')
                        }
                    }
                })
            }
            else{
                res.end('You are not yet registered')
            }
        })
      
    });
 
    return;
  }
  // default index.html
  var filename = "index.html";
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});
 
server.listen(8000, () => {
  console.log('Server listening on http://localhost:8080/ ...');
});