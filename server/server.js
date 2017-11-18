var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
})

app.listen(PORT, function() {
  console.log('Listening on PORT: ', PORT);
})
