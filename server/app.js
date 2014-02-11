var express = require("express");
var jade = require('jade');
var fs = require("fs");
var db = require("./db");

var app = express();

// middleware
app.use(express.bodyParser());

// init by getting database model
// work = database model
db.start(function(Work) {
  Work = Work;
  
  /*
   * http verb listeners
   */
  app.get("/index.html", function(req, res) {
    var res = res;
    var body = "";
    
    Work.find(function (err, works) {
    if(err)
      throw(err);
      console.log(works);
      renderIndex(res, works);
    });
  });
  
  app.get("/upload.html", function(req, res) {
    var res = res;
    var body = "";
    jade.renderFile("../public/upload.jade", {}, function(err, html) {
      if(err)
        console.log("error rendering file: " + err);
      body = html;
      res.send(body);
    });
  });

  app.post("/upload", function(req, res) {
    console.log(req.body);
  });
});
  
// renders the index page using jade
// i might put this in some sort of controller
// file eventually
function renderIndex(res, works) {
  jade.renderFile(
    "../public/index.jade",
    {works: works},
    function(err, html) {
      if(err)
        console.log("error rendering file: " + err);
      body = html;
      res.send(body);
    });
}

app.listen(3000);