
var http = require('http');

var url = require('url');

var querystring = require('querystring')

function start_router(router_login,router_other)
{
	
	function onRequest(request,response)
	{
		var pathname = url.parse(request.url).pathname;
		//user login router
		if(pathname=="/server_router/login")
		{
			var query = url.parse(request.url).query;

			var username = querystring.parse(query)["username"];

			var pwd = querystring.parse(query)["pwd"];
			
			router_login(pathname,query,username,pwd,response);
		}

	}

	http.createServer(onRequest).listen(8080);

}

exports.start_router=start_router;

console.log("start_router working now");