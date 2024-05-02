
// Entrada de Dados Lib
const read = require("readline-sync")


//Vai pedir o nome e idade
console.clear()
let nome = read.question("Qual é o seu nome? \n")
let idade = read.question("Qual é a idade \n")


console.log(`O seu nome é ${nome} e você tem ${idade} anos.`)