var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.listen(8888);

app.get('/', function(req, res) {
  res.send('hello express');
});

app.get('/potato', function(req, res) {
  res.send*('/home/cabox/workspace/potato.html')
 
});