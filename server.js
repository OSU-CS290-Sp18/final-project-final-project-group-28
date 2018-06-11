var http = require("http");
var fs = require("fs");
var port = process.env.PORT || 3000;

function requestHandler(request, response) {
	console.log("Got a request!");
	console.log("Method: ", request.method);
	console.log("url: ", request.url);
	
	response.statusCode = 200;
	response.setHeader('Content-Type', 'text/html');
	
	let data = "";
	
	if(request.url === "/") {
		try {
			data = fs.readFileSync('./public/index.html', 'utf-8');
		} catch (err) {
			console.error(err);
		}
	} else if(request.url === "/index.html") {
		try {
			data = fs.readFileSync('./public/index.html', 'utf-8');
		} catch (err) {
			console.error(err);
		}
	} else if (request.url === "/404.html") {
		try {
			data = fs.readFileSync('./public/404.html', 'utf-8');
			response.statusCode = 404;
		} catch (err) {
			console.error(err);
		}
	}else {
		try {
			data = fs.readFileSync('./public/404.html', 'utf-8');
			response.statusCode = 404;
		} catch (err) {
			console.error(err);
		}
	}
	
	console.log(response.statusCode);
	response.write(data);
	response.end();
}

var server = http.createServer(requestHandler);

server.listen(port);