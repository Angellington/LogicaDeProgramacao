console.clear()
// Verify if the number is even or odd
const prompt = require("prompt-sync")()

let n = Number(prompt('Insert your number: '))

function EvenOdd(n){
    if(n % 2 === 0){
        return console.log("Your number is Odd")
    };
    if(n % 2 !== 0){
        return console.log('Your number is Even')
    }
}

EvenOdd