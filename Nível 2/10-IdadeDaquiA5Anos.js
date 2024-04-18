const prompt = require("prompt-sync")()

//  Utilizando o JS 
// escreva um programa que leia o nome de uma pessoa, 
// sua idade e escreva o nome da pessoa 
// e a idade que ela terá daqui 5 anos.
console.clear()

let nome = prompt("Qual é o seu nome: ")
let idade = prompt("Qual é a sua idade: ")
idade = parseInt(idade)

console.log(`O seu nome é ${nome} e você tem ${idade} anos. \nDaqui a 5 anos, você terá ${idade + 5}`)
