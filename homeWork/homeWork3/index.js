const express = require('express');
const bodyParser = require('body-parser');
const handlers = require('./handlers');

var app = express(); 
app.use(bodyParser.urlencoded({ extended: true })); // reading body data from post request

app.get('/iminja', handlers.iminja);
app.post('/iminja', handlers.iminjaPost);

app.listen(8080);