const fs = require('fs');
const IMINJA_FILE = './iminja.txt';
const STUDENTS = './students.json';

const getIminja = (req, res) => {
    fs.readFile(IMINJA_FILE, 'utf8', (err, data) => {
        if (err) {
            console.log("Error reading file");
            res.status(500).send('could not read file');
            return;
        }
        let out = {
            iminja: data.split(' ')
        };
        res.render('iminja', out);
    });
};

const postIminja = (req, res) => {
    fs.appendFile(IMINJA_FILE, ` ${req.body.ime}`, (err) => {
        if (err) {
            console.log("Error reading file");
            res.status(500).send('could not append to file');
            return;
        }
        res.redirect('/iminja');
    });
};

module.exports = {
    getIminja,
    postIminja,
    getStudents
}