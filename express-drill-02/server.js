var express = require('express');
var app = express();
app.use(express.static('public'));

var lights = [
	"neon",
	"soft",
	"bright",
];

var doors = [
	"french",
	"wood",
	"double",
];

app.get('/lights', function (req, res){
	res.send(lights.join(","));
});

app.get('/doors', function (req, res){
	res.send(doors.join(","));
});

app.listen(process.env.PORT || 3000, function() {
	console.log('Example app listening at http://localhost:3000/');
});