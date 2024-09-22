console.clear();
// Import Prompt Library

const prompt = require('prompt-sync')()

// Calculor Functions
function addition(a, b){
    let r = a + b;
    return r
}
function subtraction(a, b){
    let r = a - b;
    return r
}

function multiply(a, b){
    let r = a * b;
    return r
}

function division(a, b){
    let r = a / b;
    return r
}

// Main Function 
function main(){
    console.log('Choose what do you want: ')
console.log('Tab: (1) - addition \nTab: (2) - subtraction\nTab: (3) - multiply\nTab: (4) - division')
let calculator = Number(prompt(''))

console.clear()


if((isNaN(calculator) || (calculator > 4) || (calculator < 1))){
    console.log("Please, insert a valid number")
} else {
    let n1 = Number(prompt('Insert your first number: '))
    let n2 = Number(prompt('Insert your second number: '))

    if(isNaN(n1) || isNaN(n2)){
        console.log("Please, insert a valid number")
    } else {
        let result;

        if(calculator === 1){
            let result = addition(n1, n2)
            return console.log(`The result of ${n1} + ${n2} = ${result}`)
        }
    
        if(calculator === 2){
            let result = subtraction(n1, n2)
            return console.log(`The result of ${n1} - ${n2} = ${result}`)
        }
        
        if(calculator === 3){
            let result = multiply(n1, n2)
            return console.log(`The result of ${n1} x ${n2} = ${result}`)
        }
        
        if(calculator === 4){
            let result = division(n1, n2)
            return console.log(`The result of ${n1} / ${n2} = ${result}`)
        }   
    }
}
}

main()

let play = prompt('Do you wanna again? (y/n)')
if(play === 'y'){
    console.clear()
    main();
} else if(play === 'n') {
    console.clear()
    console.log('Entendido! Bom descanso.')
} else {
    console.log("I'm sorry.")
}


