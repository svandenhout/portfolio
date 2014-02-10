// neat abstract routing to call the right eventhandlers
// for the http request response and postData
exports.route = function(handle, pathname, response, postData) {
  console.log("About to route a request for " + pathname);
  // if the pathname has a function the route is registered in
  // the handle object
  if(typeof handle[pathname] === 'function') {
    return handle[pathname](response, postData);
  }else {
    console.log("no request handler found for" + pathname)
    response.writeHead(404, {"Content-Type": "text/plain"})
    response.write("404 Not found");
    response.end();
  }
}