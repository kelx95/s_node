var bcrypt = require('bcryptjs');
const User = require("../models/user");
//Edit
const viewEditUser = (req, res) => {
    User.findById(req.params.id)
        .then((data) => {
            res.render('user_edit', {
                user: data
            })
        })
        .catch((err) => {
            console.log(err);
        })
}
const apiEditUser = (req, res) => {
    User.update(req.params.id, {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        })
        .then(() => {
            res.redirect('/dashboard');
        })
        .catch((err) => {
            res.status(500).send("Could not update ", err);
        })
}
//Delete
const apiDeleteUser = (req, res) => {
    User.remove(req.params.id)
        .then(()=>{
            res.redirect('/dashboard');
        })
}
//Add
const viewNewUser = (req, res) => {
    res.render('new_user');
}
//To add new user
const apiNewUser = (req, res) => {
    if (req.body.first_name !== undefined && req.body.first_name.length > 0 &&
        req.body.last_name !== undefined && req.body.last_name.length > 0 &&
        req.body.email !== undefined && req.body.email.length > 0 &&
        req.body.password !== undefined && req.body.password.length > 0 &&
        req.body.password2 !== undefined && req.body.password2.length > 0 &&
        req.body.password2 === req.body.password
    ) {
        let hash = bcrypt.hashSync(
            req.body.password,
            bcrypt.genSaltSync(10)
        );

        User.createNew({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hash
            })
            .then(() => {
                res.redirect('/dashboard');
            })
            .catch(err => {
                console.log(err);
                res.redirect('/register?err=1')
            });
    } else {
        res.redirect('/register?err=2');
    }
}
module.exports = {
    viewEditUser,
    apiEditUser,
    viewNewUser,
    apiNewUser,
    apiDeleteUser
}