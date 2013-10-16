var express = require('express');
var app = express();

var serverNumbr = 0;

app.use(express.methodOverride());

if (app.get('env') === '01') {
	serverNumbr = 1;
};

if (app.get('env') === '02') {
	serverNumbr = 2;
}; 

app.get('/', function(req, res){
	res.send('<h1>This is API Server Number ' + serverNumbr + "</h1>");
});

app.listen(80);