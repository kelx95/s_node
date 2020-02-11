

// //add to database
// let p = new Produkt({
//     "ime": "Milka so Oreo",
//     "proizvoditel": "Mondelez",
//     "cena": 30.0,
//     "tezina": 300.0,
//     "parcinja": 1
// });

// p.save((err) => {
//     if (err) {
//         console.log('Could not connect to database');
//         return;
//     }
// })

// //read from database
// Produkt.find({}, (err, data) => {
//     if (err) {
//         console.log('Could not read from database');
//         return;
//     }
//     console.log(data);
// });

// //delete from database
// Produkt.deleteOne({_id: "5e42c48284192e45746dd473" }, (err) => {
//     if (err) {
//         console.log('Could not delete from database');
//         return;
//     }
// });

// Produkt.update({ime: "Smoki"}, {cena: 15.0}, (err)=>{
//     if(err){
//         console.log('Could not update record');
//         return;
//     }
// });

const db = require('./bootstrap/db');
const Produkt = require('./models/produkt');

db.initDB();

produkt.createNew({
        "ime" : "Milka so jagodi",
        "proizvoditel" : "Mondelez",
        "cena" : 30,
        "tezina" : 300,
        "parcinja" : 1,
        "__v" : 0   
})
    .then(()=>{
        return produkt.update("", {ime: "Milka so Leshnici"});

    })
    .then(()=>{
        return produkt.remove("");
    })
    .then(data => {
        return produkt.readAll();
    })
    .then(()=>{
        console.log(data);
    })
    .then((err)=>{
        console.log(err);
    })
