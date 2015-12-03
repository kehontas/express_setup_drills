var express = require('express');
var app = express();
app.use(express.static('public'));

var sizes = [
	"large",
	"medium",
	"small"
];

var transport = [
	"planes",
	"trains",
	"automobiles"
];

app.get("/sizes", function (req, res){
	res.send(sizes.join(","));
}); 

app.get("/transport", function (req, res){
	res.send(transport.join(","));
});

app.listen(process.env.PORT || 3000, function() {
	console.log('Example app listening at http://localhost:3000/');
});