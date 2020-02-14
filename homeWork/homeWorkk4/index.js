const express = require('express');
var hbs = require('hbs');
const bodyParser = require('body-parser');
const handlers = require('./handlers/studentHandlers');

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.set('view engine', 'hbs');
//GET
app.get('/students', handlers.getStudents);
//POST
app.post('/add', handlers.postStudentsAdd);
//Edit a student by selecting its userID
app.post('/edit', handlers.postStudentsEdit);
//Delete a student by ID
app.post('/delete', handlers.postStudentsDelete);
//Delete s student with a button from students route
app.post('/students', handlers.postStudentsDelete);

app.listen(8080);