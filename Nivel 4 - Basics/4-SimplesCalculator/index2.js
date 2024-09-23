console.clear()
// Import Libraries
const prompt = require('prompt-sync')();
const color = require('colors');

// Creating a Calculator (+ - * /)

//functions
function addition(a, b){
    let r = a + b;
    return console.log(r);
};

function subtraction(a, b){
    let r = a - b;
    return console.log(r);
};

function multiply(a, b){
    let r = a * b;
    return console.log(r);
};

function division(a, b){
    let r = a / b;
    return console.log(r);
};

// Apply

let n1 = prompt('Tab your first number: ')
let n2 = prompt('Tab your second number: ')



console.log("Please, insert waht function you'll use: ")
console.log('Tab (1) - Addition \nTab (2) - Subtraction\nTab (3) - Multiply\nTab(4) - Division: ');
let option = prompt('0');

if(option === 1){
    return addition(n1, n2)
}