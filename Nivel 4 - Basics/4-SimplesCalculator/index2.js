console.clear()
// Import Libraries
const prompt = require('prompt-sync')();
const color = require('colors');

// Creating a Calculator (+ - * /)

//functions
function addition(a, b){
    let r = a + b;
    return console.log(`Result ${r}`.green);
};

function subtraction(a, b){
    let r = a - b;
    return console.log(`Result ${r}`.green);
};

function multiply(a, b){
    let r = a * b;
    return console.log(`Result ${r}`.green);
};

function division(a, b){
    let r = a / b;
    return console.log(`Result ${r}`.green);
};

function choose_number(){
    let n1 = Number(prompt('Tab your first number: '));
    let n2 = Number(prompt('Tab your second number: '));
    
    return [n1, n2]
};

// Apply

let option = 0;

while (true) {
    if(option === 0){
        console.log("Please, insert waht function you'll use: ")
        console.log('Tab (1) - Addition \nTab (2) - Subtraction\nTab (3) - Multiply\nTab(4) - Division ');

        option = Number(prompt(':'));

        //Check for valid
        if(option < 1 || option > 5 || isNaN(option)) {
            console.log('Please insert a valid option'.red)
            continue;
        }

        // Exit
        if (option === 5){
            console.log('Exiting calculator...'.yellow);
            break
        }

        // Get Number for the operation

        let [n1, n2] = choose_number();

        if(option === 1){
            addition(n1, n2)
        }
        if(option === 2){
            subtraction(n1, n2)
        }
        if(option === 3){
            multiply(n1, n2)
        }
        if(option === 4){
            division(n1, n2)
        }
    } else {
        console.log('Insert the option again')
    }
}


