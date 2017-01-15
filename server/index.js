var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static(path.join(__dirname, '..', 'public')));

// mock login
app.post('/login', function(req, res) {
    res.end();
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


app.listen(8080, function() {
  console.log('Running at localhost:8080');
});
