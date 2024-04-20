console.clear()
const prompt = require("prompt-sync")()
// Limpar o console e adicionar a biblioteca de entrada

let valor = 0
let negativo = 0

//Método For
for (let contagem = 1; contagem <= 10; contagem++){
    valor = prompt("Digite um valor: ")
    if (valor < 0){
        negativo++
    }
}

console.log("A quantidade de números negativos: ", negativo)

//Método While
valor, negativo = 0
contagem = 1

while (contagem <= 10){
    valor = prompt("Digite um valor: ")
    if (valor < 0){
        negativo++
    }
    contagem++
}
console.log("A quantidade de números negativos: ", negativo)