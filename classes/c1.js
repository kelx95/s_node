
const c2f = num=> (num*9/5)+32;
//fahrenheit to celsius
const f2c = f => (f-32)*5/9;

const temp = (temperature, converter)=>{
    console.log(converter(temperature));
}
temp(42, c2f);
temp(107.6, f2c);

const promiseExample = (num) => {
    return new Promise((success, fail)=> {
        //promise logic
        if(num == 0){
            throw "Zero (0) cannot be neither even nor odd";
        }
        if(num%2 ==0){
            success();
        }else{
            fail();
        }
        //end of promise
    });
};

// promiseExample(0)
//     .then(
//         ()=>{
//             console.log('Success! Number is even!');
//         }
//     )
//     .catch(err=>{
//     console.log('An error has occured :', err);
//     });

module.exports = {
    c2f,
    f2c,
    temp,
    promiseExample
};