const read = require("readline-sync")

//Vou fazer uma calculadora
console.clear()


let num1 = read.question("Número 1: ")
num1 = parseInt(num1)
let num2 = read.question("Número 2: ")
num2 = parseInt(num2)
//Soma

let soma = num1 + num2
console.log(soma)
soma = parseInt(soma)


//Substração
let sub = num1 - num2
sub = parseInt(sub)

//Multiplicação
let mul = num1 * num2 
mul = parseInt(mul)

//Divisão
let div = num1 / num2
div = parseInt(div)


// Resultados
console.log(`A soma é ${soma}`)
console.log(`A sub é ${sub}`)
console.log(`A mul é ${mul}`)
console.log(`A div é ${div}`)

