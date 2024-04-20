console.clear()
const prompt = require("prompt-sync")()
//Limpar Console e Adicionar Biblioteca de Entrada

//Ler 20 valores, calcular e escrever a média aritmética desses valores lidos.

let valor = 0
let media = 20
let soma = 0

for (let contagem = 1; contagem <= 20; contagem++){
    valor = prompt("Digite um valor: ")
    valor = parseInt(valor)
    soma = valor + soma
}

console.log("A média dos vinte é: ",  (soma/media))
