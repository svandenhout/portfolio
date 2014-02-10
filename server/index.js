var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

/*
 * index basically specifies the routes
 */

// put all of the routes in the handle
var handle = {};

handle["/"] = requestHandlers.start;
handle["/index"] = requestHandlers.start;
handle["/uploadform"] = requestHandlers.uploadForm;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);