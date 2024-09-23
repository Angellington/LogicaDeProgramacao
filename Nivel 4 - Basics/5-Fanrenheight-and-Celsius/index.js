console.clear();
// Import prompt
const prompt = require('prompt-sync')();
const color = require('colors');

// Start!!! - Make a Fanrenheight convertor to Celsius and vice versa

console.log("---Temperature Conversor---")
console.log("-- (Cº)  º-º-º-º-º  (Fº) --")

console.log('Tab (1) - Celsius to Fahrenheit \nTab (2) - Fahrenheit to Celsius')

let option;

while(true){
    option = Number(prompt('Select option: '));

    if(isNaN(option) || option < 1 || option > 2){
        console.log('Insert a valid option'.red);
    } else {
        break;
    }
}
// Choosing option
if (option === 1) {
    console.clear();
    console.log('===Converting-Celsius-to-Fahrenheit===')
    let n = prompt('Insert your temperature: ');
    CelsiusToFahrenheit(n)
} else if (option === 2){
    console.clear();
    console.log('===Converting-Fahrenheit-to-Celsius===')
    let n = prompt('Insert your temperature: ');
    FahrenheitToCelsius(n)
}



// Celsius to Fahrenheit Function
function CelsiusToFahrenheit(c){
    let f;
    f = Math.floor((c*1.8)+32)

    return console.log(`${f}ºF`.green)
}

// Fahrenheit to Celsius Function
function FahrenheitToCelsius(f){
    let c;
    c = Math.floor((f - 32)/1.8)

    return console.log(`${c}ºC`.green)
}

