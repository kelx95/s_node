
const fs = require('fs');

let read = (file)=>{
    return new Promise((success, fail)=>{
        fs.readFile(file, "utf8", (err, data)=>{
            if(err){
                return fail(err);
            }
            return success(data);
        })
    })
}
const append = (file, content) => {
    return new Promise((success, fail) => {
        fs.appendFile(file, content, (err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};
const iminja = (req, res) => {
    read('./iminja.txt')
    .then((data)=>{
        res.send(data);  
    })
    .catch(err=>{
        res.send("Error Occurred");  
    });   
};
const iminjaPost = (req, res) => {
    let newName = String(req.body.name) +"\n";
    append('./iminja.txt', newName)
    .then(()=>{
        return read('./iminja.txt')  
    })
    .then((data)=>{
        res.send(data);
    })
    .catch(err=>{
        res.send("Error Occurred");  
    });
}
module.exports = {
    iminja,
    iminjaPost
}