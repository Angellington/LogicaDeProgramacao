console.clear()

const prompt = require("prompt-sync")()

let valor = 0
let soma = 0

// Método For
for(let contagem = 1; contagem <= 5; contagem++){
    valor = prompt("Digite um valor: ")
    valor = parseInt(valor)
    soma = soma + valor
}

console.log("A soma é ", soma)

// Método While

valor, soma = 0
contagem = 1

while(contagem <= 5){
    valor = prompt("Digite um valor: ")
    valor = parseInt(valor)
    soma = soma + valor
    contagem++
}

console.log("A soma é ", soma)

// Método While Do
valor, soma = 0
contagem =  1

do {
    valor = prompt("Digite um valor: ")
    valor = parseInt(valor)
    soma = soma + valor
    contagem++
} while (contagem <= 5)

contagem.log("A soma é ", soma)