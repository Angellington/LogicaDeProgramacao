console.clear()

const prompt = require('prompt-sync')()

//Escreva um algoritmo que lê um vetor com seis posições e o escreve. 
//Conte, a seguir, quantos valores do vetor são negativos e escreva esta informação.

let vetor = [1, 2, 3, 4, 5, 6]
let input = 0

for(let i = 0; i < 6; i++){
    let input = prompt(`Informe um número da posição ${i+1}: `)
    valor = vetor[input]
    console.log(valor)
}

for (i = 0; i < 6; i++){
    if(valor < 0){
        console.log(`O valor ${valor}  é negativo.`)
    }
}