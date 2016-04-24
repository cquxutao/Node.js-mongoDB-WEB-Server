
var server = require("./server1.1.2");

var router = require("./router1.1.2");

// server working
server.start_router(router.router_login,router.router_other);