// No Portugol Studio, escreva um programa que peça o ano atual e o ano de seu nascimento. 
// A partir dessas informações, calcule a provável idade da pessoa e exiba na tela

const prompt = require("prompt-sync")()

console.clear()

let AnoNasc = prompt("Em que ano você nasceu? ")
let AnoAtual = 2024
let Resultado = AnoAtual - AnoNasc

console.log("Então você provavelmente deve ter ", Resultado)
