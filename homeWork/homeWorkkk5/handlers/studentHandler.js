const db = require('../bootstrap/db');
const student = require('../models/Student');
//////
db.initDB();
//Get Students
const getStudents = (req, res) => {
    student.readAll()
        .then((data) => {
            //out is an object that has students as property - students is array --> students = [{object1}, {object2}]
            let out = {
                students: data
            }
            res.render('students', out);
        })
        .catch((err) => {
            res.status(500).send("Could not read database", err);
        })
}
//
//Add Student
const postStudentsAdd = (req, res) => {
    student.createNew({
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "address": req.body.address,
            "avg_grade": req.body.avg_grade
        })
        .then(() => {
            res.redirect('/students');
        })
}

//Edit Student
const postStudentEdit = (req, res) => {
    student.update(req.body.id, {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            avg_grade: Number(req.body.avg_grade)
        })
        .then(() => {
            res.redirect('/students');
        })
        .catch((err) => {
            res.status(500).send("Could not update ", err);
        })
}
//Delete Student
const postStudentsDelete = (req, res) => {
    student.remove(req.body.id)
        .then(() => {
            res.redirect('/students');
        })
        .catch((err) => {
            res.status(500).send("Could not delete", err);
        })
}

module.exports = {
    getStudents,
    postStudentsAdd,
    postStudentEdit,
    postStudentsDelete
}