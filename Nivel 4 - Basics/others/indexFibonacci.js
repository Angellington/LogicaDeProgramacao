console.clear();
// Import libraries
const prompt = require('prompt-sync')();
const color = require('colors');

// Variables 
let i = 0;
let ii = 1;


// Main Code
while(true){
    let r = i + ii;
    console.log(r)

    i = ii
    ii = r

    if(r > 1000){
        break
    }

}

function fibonacciRecursive(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(13))