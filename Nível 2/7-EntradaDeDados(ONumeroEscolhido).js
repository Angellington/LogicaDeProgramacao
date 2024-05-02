const read = require("readline-sync")

console.clear()



let numero = read.question("Digite um número: ")
numero = parseInt(numero)
console.log(`O número escolhido é ${numero}. E o tipo é ${typeof(numero)}`)
