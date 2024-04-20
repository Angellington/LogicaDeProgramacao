//Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

const prompt = require("prompt-sync")()
// Adicionar biblioteca de entrada

console.clear()
// Apagar o console

let valor1 = prompt("Valor 1: ")
let valor2 = prompt("Valor 2: ")

valor1 = parseInt(valor1)
valor2 = parseInt(valor2)

if (valor1 > valor2){
    console.log(valor1, valor2)
} else {
    console.log(valor2, valor1)
}




