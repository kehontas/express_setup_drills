var express = require('express');
var app = express();
app.use(express.static('public'));

var colors = [
	"red",
	"blue",
	"green"
];

var fruits = [
	"apples",
	"banana",
	"orange"
];

app.get('/', function (req, res){
	res.send('Hello World!');
	//res.sendFile('views/index.html' , { root : __dirname});
});

app.get("/colors", function (req, res){
	res.send(colors.join(","));
}); 

app.get("/fruits", function (req, res){
	res.send(fruits.join(","));
});

app.listen(process.env.PORT || 3000, function() {
	console.log('Example app listening at http://localhost:3000/');
});