var studentsData  =require('./students');
var logData  =require('./readlog');
var buffer = new Buffer.alloc(1000000);
//var bufferText = buffer.write(logData.data)
var bufText = `j`;
var text = 'jj';
var students = '';
setTimeout(()=>{
    if(typeof(logData.data) != undefined){
    bufText = `<textarea class="form-control" row="10" value="">${ buffer.write(logData.data)}</textarea>`;
  
    text = ` <textarea class="form-control" row="10" value="">${logData.data}</textarea>`;
}
if(studentsData.data != undefined){
    students = studentsData.data;
}
}, 200)

exports.data = ()=>{
   return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="css/main.css">
      <title>Document</title>
    </head>
    <body>
      <div class="main mt-5 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
          <h2> Read log file</h1>
          <div class="card">
          <div class="card-body">
         ${text}
          <p>As Buffer</p>
          ${bufText}
          </div>
          </div>
          </div>
          <div class="col-md-6">
            <h1>Student registration System</h1>
            <div class="card">
              <div class="card-body">
                <h1 class="card-title">Register</h1>
                <form  action="/details" enctype="multipart/form-data" method="post">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input required type="text" name="name"class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name">
                  </div>
                  <div class="form-group">
                    <label for="age">Age</label>
                    <input required type="date" name="age"class="form-control" id="age" placeholder="Date of birth">
                  </div>
                  <div class="form-group">
                    <label for="class">Class</label>
                    <input required type="class" name="class"class="form-control" id="class" placeholder="Date of birth">
                  </div>
                  <div class="form-group">
                  <label for="class">Image</label>
                  <input  type="file"  name="image"class="form-control" id="image" placeholder="Your image">
                </div>
                  <input type="submit" name="action"class="btn btn-primary" value="register">
                </form>
                <hr>
                <h2>Delete</h2>
                <form method="POST" action="/delete"> 
                <div class="form-group">
                <label for="name">Name</label>
                <input required type="text" name="name"class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name to delete">
              </div>
                <input type="submit" name="action"class="btn btn-danger" value="Delete">
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <h1>Students</h1>
            <div class="card">
             <div class="card-body">
             <ul class="list-group">${students}</ul>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </html>`;
}
