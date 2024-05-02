const prompt = require("prompt-sync")()
// Biblioteca Prompt de entrada

console.clear()
//Apagar log

let valor1 = prompt("Digite o primeiro valor: ")
let valor2 = prompt ("Digite o segundo valor: ")

if (valor1 > valor2){
    console.log("Valor 1 é maior que valor dois")
} else if (valor1 == valor2) {
    console.log("Empate")
} else {
    console.log("Valor 2 é maior!")
}