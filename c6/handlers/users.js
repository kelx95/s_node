const User = require('../models/user');


const getUsers = (req, res) => {
    User.readAll()
        .then((data) => {
            let out = {
                users: data
            }
            res.render('dashboard', out);
        })
        .catch((err) => {
            res.status(500).send("Could not read database", err);
        })
}
module.exports = {
    getUsers
}