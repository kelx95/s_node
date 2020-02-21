const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var jwt = require('jsonwebtoken');

const hbs = require('hbs');
const db = require('./bootstrap/db');
const users = require('./handlers/users');
const auth = require('./handlers/auth');
const dashboard = require('./handlers/dashboard');



db.initDB();
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());
//validate cookies
app.use((req, res, next) => {
    //console.log(req.cookies);
    let whitelist = [
        '/',
        '/register'
    ];
    if (!whitelist.includes(req.path)) {
        if (req.cookies.jwt) {
            jwt.verify(req.cookies.jwt, auth.tokenKey, (err, payload) => {
                if (err) {
                    console.log('bad credentials');
                    return res.status(401).send('Unauthorized');
                }
                return next();
            })
        } else {
            console.log('no jwt');
            return res.status(401).send('Unauthorized');
        }
    } else {
        return next();
    }
});

app.set('view engine', 'hbs');

// routes
app.get('/', auth.viewLogin);
app.post('/', auth.apiLogin);

app.get('/register', auth.viewRegister);
app.post('/register', auth.apiRegister);
app.get('/dashboard', users.getUsers);
app.get('/dashboard', dashboard.viewDashboard);


// app.get('/users', users.viewUsersGetAll);

app.listen(8080, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Started on port 8080');
});