var pow = require('./lib')
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/calculate', function (req, res) {
   sendResult(parseInt(req.query.x),parseInt(req.query.n),res);
});

app.listen(3000, '192.168.25.11', function () {
  console.log('Example app listening on port 3000!');
});





function sendResult(x,n,res) {
	result = pow.pow(x,n);	
	//res.send("<html><body>");
	//console.log(pow.pow(x,n))
	res.send("the result is: " + result + 
		"<form method=\"get\" action=\"/calculate\">" +
		" <label for=\"x\">x:<\/label><br><input type=\"number\" id=\"x\" name=\"x\"><br>" +
		"<label for=\"n\">n:<\/label><br><input type=\"number\" id=\"n\" name=\"n\"><br><br>" +
		"<input type=\"submit\" value=\"calculate\"><\/form>");
	//res.send("<\/html><\/body>");
}
