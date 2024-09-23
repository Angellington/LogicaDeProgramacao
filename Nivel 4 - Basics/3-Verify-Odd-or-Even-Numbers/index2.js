console.clear();
// Import Libraries
const prompt = require('prompt-sync')();
const color = require('colors');

// Verfy if number is Even or Odd;

let n = Number(prompt('Tab number: '));

if(n % 2 === 0){
    return console.log('Odd')
}

if(n % 2 !== 0){
    return console.log('Even')
}
    