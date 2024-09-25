console.clear();
// Import libraries
const prompt = require('prompt-sync')();
const color = require('colors');

// Main Code



while (true){
    let age = Number(prompt("Insert your age: "));
    if(isNaN(age)){
        continue
    }

    if(age >= 18){
        console.log("you're adult")
        break
    } else {
        console.log("you're kid")
        break
    };
}
