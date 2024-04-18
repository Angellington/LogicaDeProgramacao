//Entrada de Dados
const readline = require('readline');

const Nome = readline.createInterface({
    input: process.stdin,
    output: process.stdin
})

Nome.question("Qual é o seu nome? ")

Nome.close

