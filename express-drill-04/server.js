var express = require('express');
var app = express();
app.use(express.static('public'));

var cities = [
	"louisville",
	"atlanta",
	"los angeles"
];

var states = [
	"ky",
	"ga",
	"ca"
];

app.get("/cities", function (req, res){
	res.send(cities.join(","));
}); 

app.get("/states", function (req, res){
	res.send(states.join(","));
});

app.listen(process.env.PORT || 3000, function() {
	console.log('Example app listening at http://localhost:3000/');
});