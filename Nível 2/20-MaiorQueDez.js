// Ler um valor e escrever a mensagem É MAIOR QUE 10! 
// se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10! 

// Adicionar a biblioteca Prompt
console.clear()

const prompt = require("prompt-sync")()


let valor = prompt("Digite um valor: ")

// Verificar se é Maior que 10
if (valor > 10){
    console.log("É maior que 10")
} else {
    console.log("É menor que 10")
}