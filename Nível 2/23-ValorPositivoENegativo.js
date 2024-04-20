// Ler um valor e escrever se é positivo, negativo ou zero.
const prompt = require("prompt-sync")()
//BIBLIOTECA DE ENTRADA

console.clear()

let valor = prompt("Digite um valor: ")
valor = parseInt(valor)

if (valor > 0){
    console.log("O valor é positivo!")
} else if (valor == 0) {
    console.log("O valor é zero!")
} else {
    console.log("O valor é menor que zero")
}