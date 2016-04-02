var express = require('express');
var app = express.createServer();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view options', { layout: false });

app.use(express.static(path.join(__dirname, 'public')));