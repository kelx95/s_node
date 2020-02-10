const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const iminja = require('./handlers/iminja')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // res.send('ok');
    let data = {
        ime: 'Pero'
    };
    res.render('main', data);
});

app.get('/iminja', iminja.getIminja);
app.post('/iminja', iminja.postIminja);

//students
app.get('/students', iminja.getStudents);
app.post('/students', iminja.getStudents);


app.listen(8080);

//new Date().getTime()