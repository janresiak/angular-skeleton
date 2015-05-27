var PORT = Number(process.env.PORT || 5000);

var compression = require('compression');
var express = require('express');
var app = express();

app.use(compression());

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('You application listening at http://%s:%s', host, port)
});