var querystring = require("querystring");
var db = require("./db");
var jade = require("jade");
var fs = require("fs");

exports.start = function(response, postData) {
  console.log("request handler start called");
  
  console.log("Request handler 'start' was called.");
  
  fs.readFile("../html/index.html", function(err, html) {
    if(err) {
      throw err;
    }
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
  });
}

exports.uploadForm = function(response) {
  fs.readFile("../html/upload.html", function(err, html) {
    if(err)
      throw err;
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
  })
}

exports.upload = function(response, postData) {
  var Work = db.start();

  // save the postData to the database
  var data = querystring.parse(postData);
  var entry = new Work(data);
  var status = '';
  entry.save(function(err) {
    if(err) {
      console.log("error on save")
      status = "error on save";
    }else {
      console.log("succesfully saved");
      status = 'succesfully saved';
    }
  });
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(status);
  response.end();
}