const movies = require('../models/movies');

const getMovies = (req, res) => {
    movies.readAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log("cannot read movies")
        })
}
const getMovieById = (req, res) => {
    movies.findById(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log("cannot find movie");
        })
}
const addMoives = (req, res) => {
    movies.createNew({
        title: req.body.title,
        release_date: req.body.release_date,
        director: req.body.director,
        actors: req.body.actors,
        genre: req.body.genre
    })
        .then(() => {
            console.log('movie created');
        })
        .catch((err) => {
            console.log('movie cannot be created');
        })
}
const updateMovie = (req, res) => {
    movies.update(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log('Cannot update');
        })
}
const removeMovieById = (req, res) => {
    movies.remove(req.params.id)
        .then(() => {
            console.log('delete successfully');
        })
        .catch((err) => {
            console.log('cannot be deleted');
        })
}
module.exports = {
    getMovies,
    getMovieById,
    updateMovie,
    removeMovieById,
    addMoives
}