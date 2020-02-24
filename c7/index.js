const express = require('express');
const bodyParser = require('body-parser');
const handler = require('./handlers/movie');

let api = express();

api.use(bodyParser.json());

api.get('/movies', handler.getMovies);
api.get('movies/:id', handler.getMovieById);
api.post('/movies', handler.addMoives);
api.put('/movies/:id', handler.updateMovie);
api.delete('/moives/:id', handler.removeMovieById);

api.listen(8080, (err) => {
    if (err) {
        console.log(error);
        return;
    }
    console.log("listening on port 8080");
    return;
});
