const fs = require("fs");
const analyzeText = require("./modules/analyzeText");

//read the file lorem.txt
let read = (file)=>{
    return new Promise((success, fail)=>{
        fs.readFile(file, (err, data)=>{
            if(err){
                return fail(err);
            }
            return success(data);
        })
    })
}

let write = (file, content) =>{
    return new Promise((success, fail)=>{
        fs.writeFile(file, content, (err)=>{
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

read('lorem.txt')
    .then((data)=>{
        // console.log(analyzeText.numberOfSentences(data.toString()));
        // console.log(analyzeText.numberOfWords(data.toString()));
        // console.log(analyzeText.numOfCharacters(data.toString()));
        // console.log(analyzeText.compareToSeven(data.toString()));
        // console.log(analyzeText.frequentWord(data.toString()));
        let analyzed = analyzeText.numberOfSentences(data.toString()) +"\n"+ analyzeText.numberOfWords(data.toString()) +"\n"+analyzeText.numOfCharacters(data.toString())+"\n"+analyzeText.compareToSeven(data.toString())+"\n"+analyzeText.frequentWord(data.toString());
        console.log(analyzed);
        return write("analyzedText.txt", analyzed);    
    })
    .catch(err=>{
        console.log('an error occurred');
    });




