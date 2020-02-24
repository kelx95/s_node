const mongoose = require('mongoose');

const Movie = mongoose.model(
    'movies',
    {
        title: String,
        release_date: Date,
        director: String,
        actors: [String],
        genre: [String]
    },
    'movies'
);

const readAll = () => {
    return new Promise((success, fail) => {
        Movie.find({}, (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

const createNew = (data) => {
    return new Promise((success, fail) => {
        let p = new Movie(data);
        console.log(p);
        p.save((err) => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

const remove = (id) => {
    return new Promise((success, fail) => {
        Movie.deleteOne({ _id: id }, (err) => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

const update = (id, data) => {
    return new Promise((success, fail) => {
        Movie.updateOne({ _id: id }, data, (err) => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};
const findById = (id) => {
    return new Promise((success, fail) => {
        Movie.findOne({ _id: id }, (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

module.exports = {
    Movie,
    readAll,
    createNew,
    remove,
    update,
    findById
};