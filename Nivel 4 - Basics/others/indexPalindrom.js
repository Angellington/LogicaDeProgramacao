console.clear();
// Import libraries
const prompt = require('prompt-sync')();
const color = require('colors');

// Main Code

let word = prompt("Insert your word: ");

// let reverse_word = word.split('').reverse().join('');
let reverse_word = word.split('').reverse().join('');
if(word === reverse_word){
    console.log('This is a Palindrom')
} else if (word !== reverse_word){
    word = word.toUpperCase();
    reverse_word = reverse_word.toUpperCase();
    if(word === reverse_word){
        return console.log('This is a Palindrom')
    }
} else {
    console.log("This is not a Palindrom!")
}

console.log(word)