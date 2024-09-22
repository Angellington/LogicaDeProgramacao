console.clear()
// Import "prompt library"
const prompt = require('prompt-sync')()

// Plus by numbers

let n1 = Number(prompt('Insert your first number: '))
let n2 = Number(prompt('Insert your second number: '))
let r = (n1 + n2);

console.log('The result is: ' + r)