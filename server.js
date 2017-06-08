var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var todos = { test: "test" };

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/todos", function(req, res) {
    res.end(JSON.stringify(todos));
});

app.post("/add", function(req, res) {
    todos.new = req.body.text;
    res.end(JSON.stringify(todos));
});

var server = app.listen(3000, function() {
    console.log("started on port 3000");
});