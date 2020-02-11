const mongoose = require('mongoose');
const cstring = 'mongodb+srv://kelmentxh:xhelili123@cluster0-apiex.mongodb.net/test?retryWrites=true&w=majority';

const produkti = mongoose.model(
    'produkti',
    {
        ime: String,
        proizvoditel: String,
        cena: Number,
        tezina: Number,
        parcinja: Number
    }
);

mongoose.connect(cstring, { useNewUrlParser: true }, (err)=>{
    if(err){
        console.log("Could not connect to database");
        return;
    }
});

produkti.find({}, (err, data) => {
    if (err) {
        console.log('Could not read from database');
        return;
    }
    console.log(data);
});

