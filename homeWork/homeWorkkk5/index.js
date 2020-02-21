const express = require('express');
var hbs = require('hbs');
const bodyParser = require('body-parser');
const handlers = require('./handlers/studentHandler');


const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.set('view engine', 'hbs');

//GET Students
app.get('/students', handlers.getStudents);
//Delte a student with a button
app.post('/students', handlers.postStudentsDelete);


//Add Student
app.post('/add', handlers.postStudentsAdd);

////Edit Student
app.post('/edit', handlers.postStudentEdit);
////Delete Student
app.post('/delete', handlers.postStudentsDelete);

app.listen(8080);

