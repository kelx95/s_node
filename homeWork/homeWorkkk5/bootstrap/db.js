const mongoose = require('mongoose');
const cstring = 'mongodb+srv://kelmentxh:xhelili123@cluster0-apiex.mongodb.net/prodavnica?retryWrites=true&w=majority';

const initDB = () => {
    mongoose.connect(cstring, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
        if(err){
            console.log('Could not connect to database');
            return;
        }
    });
}
module.exports = {
    initDB,
};
