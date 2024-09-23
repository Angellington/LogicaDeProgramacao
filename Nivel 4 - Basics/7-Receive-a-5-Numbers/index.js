console.clear();
// Addition Numbers: Receive a list of 5 numbers and do the addition their.
const prompt = require("prompt-sync")()

const list = [10, 4, 29, 345, 65];

const n = Number(prompt('Insert your number: '))

list.forEach((value, index) => {
    list[index] = value + n; 
});

console.log(list)





