console.clear()
// Factorial Number exercise
const prompt =  require('prompt-sync')();
const color = require('colors')


function factorial(n){
    let r = 1;
    let i = 1;

    for(i = 1; i <= n; i++){
        r = i * r
    } 
    //
    console.log(`${`Factorial of ${n} is`.yellow} -> ${String(r).green}`);

}

console.log("n!= Factorial Function =!n".bgYellow.black)
let n = Number(prompt("Insert your number: "))

factorial(n);


