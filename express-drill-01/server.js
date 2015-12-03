var express = require('express');
var app = express();
app.use(express.static('public'));

var hats = [
	"top",
	"fedora",
	"ball cap",
];

var dogs = [
	"big",
	"small",
	"medium",
];

app.get("/hats", function (req, res){
	res.send(hats.join(","));
});

app.get("/dogs", function (req, res){
	res.send(dogs.join(","));
});

app.listen(process.env.PORT || 3000, function(){
	console.log('Example app listening at http://localhost:3000/');
});