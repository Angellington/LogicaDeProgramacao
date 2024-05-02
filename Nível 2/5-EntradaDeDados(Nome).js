//Entrada de Dados
//Aplicativo IMC

//Uso da Biblioteca readline(input)
//Uso da Biblioteca color
const colors = require('colors')
const read = require("readline-sync")

console.clear()

console.log("IMC")
let nome = read.question("\nDigite o seu nome: ")
let peso = Number(read.question("\nDigite o seu peso (kg): ").replace(",", "."))
let altura = Number(read.question("\nDigite o sua altura (kg): ").replace(",", "."))
let imc = peso / (altura * altura)
console.log("")
console.log("\n-----------------------------")
console.log("\nFicha do aluno".italic.bold)
console.log(`\nNome: ${nome}`)
console.log(`\nPeso: ${altura}`)
console.log(`\nIMC: ${imc.toFixed(2)}`)
console.log("\n-----------------------------")

if(imc < 18.5){
    console.log("Abaixo do peso".cyan)
} else if (imc < 25 ){
    console.log("Peso normal".green)
} else if (imc < 30 ){
    console.log("Acima do peso".yellow)
} else if (imc < 35) {
    console.log("Obesidade II (severa)".red)
} else {
    console.log("Obesidade III (mórbido)".red.bold)
}
console.log("\n")