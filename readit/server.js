var express = require('express');

var app = express.createServer();

 app.get('/', function(req, res){
 	output = "Read it<br />";
	output += "Site under contstruction...<br />";
	output += "Please check back later<br />";

	res.send(output);
	// for (k in req.headers) {
	//   output += k + '=' + req.headers[k] + '\n';
	// }
 });

 app.listen(8080);