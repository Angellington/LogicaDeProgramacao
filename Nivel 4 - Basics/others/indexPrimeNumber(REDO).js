console.clear();
// Import libraries
const prompt = require('prompt-sync')();
const color = require('colors');

// Main Code

let n = Number(prompt("Insert your number: "));

PrimeNumbers(n);


// Functions

// Numero > 1 e n - 1
function PrimeNumbers(n){
    if (n <= 1){
        console.log("It's not a Prime Number");
        return;
    }

    for(let i = 2; i*i <= n; i++){
        if(n % i === 0){
            console.log("It's not a Prime Number");
            return;
        }
    }

    console.log("It's a Prime Number")
}

