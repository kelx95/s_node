const express = require('express');
const bodyParser = require('body-parser');
const handlers = require('./handlers');

var app = express();

app.use(bodyParser.urlencoded({ extended: false })); //reading body data from post request 

app.get('/', (req, res) => {
    res.send('ok');
});

app.get("/ime", (req, res) => {
    res.send('pero');
});

app.get('/greetings/:ime', (req, res) => {
    res.send(req.params.ime);
})
app.get('/calc/:op/:num1/:num2', (req, res) => {
    let result = 0;
    switch (req.params.op) {
        case 'add':
            result = Number(req.params.num1) + Number(req.params.num2);
            break;
        case 'sub':
            result = Number(req.params.num1) - Number(req.params.num2);
            break;
        case 'mul':
            result = Number(req.params.num1) * Number(req.params.num2);
            break;
        case 'div':
            result = Number(req.params.num1) / Number(req.params.num2);
            break;
        default:
            console.log('try again');
    }
    res.send("" + result);
})
app.post('/calc/', (req, res) => {
    let result = 0;
    switch (req.body.op) {
        case 'add':
            result = Number(req.body.a) + Number(req.body.b);
            break;
        case 'sub':
            result = Number(req.body.a) - Number(req.body.b);
            break;
        case 'mul':
            result = Number(req.body.a) * Number(req.body.b);
            break;
        case 'div':
            result = Number(req.body.a) / Number(req.body.b);
            break;
        default:
            console.log('try again');
    }
    
    res.send("" +result);
})
app.listen(8080);


//http://localhost:8080/calc/add/3/5
