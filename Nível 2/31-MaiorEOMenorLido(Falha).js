//Faça um programa que leia 100 números inteiros e no final, escreva o maior e o menor valor lido. 
console.clear()

const prompt = require("prompt-sync")()

let valor = 1
let maior = valor
let menor = valor

for  (let contagem = 1; contagem <= 5; contagem++){
    valor = prompt("Digite um valor: ")
    valor = parseInt(valor)
    if (maior < valor){
        maior = valor
    } 
    if (valor < menor){
        menor = valor
    }
}

console.log("O maior valor é ", maior)
console.log("O menor valor é ", menor)