const fs = require('fs');

// fs.writeFile('data.txt', 'TEST TEST', (err) => {
//     if (err) {
//         console.log('could not write file');
//         return;
//     }
//     console.log('successfully writtern to file');
    
//     fs.appendFile('data.txt', ' test test test', (err) => {
//         if (err) {
//             console.log('could not append to file');
//             return;
//         }
//         console.log('append executed successfully');
//         fs.readFile('./data.txt', (err, data) => {
//             if (err) {
//                 console.log('could not read');
//                 return;
//             }
//             console.log(data.toString());
//         });     
//     });
// });

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

let append = (file, content)=>{
    return new Promise((success, fail)=>{
        fs.appendFile(file, content, (err)=>{
            if(err){
                return fail(err);
            }
            return success();
        });  
    });
};

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

// write('file.txt', 'some content')
//     .then(()=>{
//         console.log('successfully wrote to file');
//     })
//     .catch(err=>{
//         console.log('an error occurred while writing to file');
//     });

// append('file.txt', ' from the append')
//     .then(()=>{
//         console.log('successfully appended to file');
//     })
//     .catch(err=>{
//         console.log('an error occurred while writing to file');
//     });

// read('file.txt')
//     .then((data)=>{
//         console.log(data.toString());
//     })
//     .catch(err=>{
//         console.log('an error occurred while writing to file');
//     });

write('file.txt', 'some content')
    .then(()=>{
        return append('file.txt', 'SOME OTHER CONTENT');
    })
    .then(()=>{
        return read('file.txt');
    })
    .then(data=>{
        console.log('file.txt data:');
        console.log(data.toString());
    })
    .catch(err=>{
        console.log('an error occurred while writing to file');
    });

let str1 = "eden";
let str2 = 'eden';
//
let str3 = `eden`; //template strings

let ime = "Bojan";
let pozdrav = `Zdravo,
 ${ime}`;

 console.log(pozdrav.length);
 let str4 = 'a+b+c+d'; //
 let arr = str4.split("+");
 console.log(arr);
 











