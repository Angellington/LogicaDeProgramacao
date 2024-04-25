// Faça um programa que crie um vetor de 10 números inteiros. 
// Em seguida, peça para o usuário informar os 10 valores. 
// Após isso, exiba os 10 valores (um por linha)

console.clear()

const prompt = require("prompt-sync")()

//programa


let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let pos = 0; pos < 10;  pos++){
    let vetor = prompt(`Informe ${pos}: `)
    vetor[pos]
}

for (pos = 0; pos < 10; pos++){
    console.log(vetor[pos])
}

