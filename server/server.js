var http = require("http");
var url = require("url");

exports.start = function(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    
    // the request object is needed to handle post, get
    // requests etc
    request.setEncoding("utf8");
    
    // post data comes in chuncks this is where we glue it back :)
    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
    });
    
    request.addListener("end", function() {
      route(handle, pathname, response, postData)
    })    
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}