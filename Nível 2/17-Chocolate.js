console.clear()

// Definindo Variáveis
let meuDinheiro = 10.0
let troco = 0 
let precoPaoUnidade = 10 
let compraChocolate = false

meuDinheiro = 10.0
compraChocolate = false

//Importar a Biblioteca Prompt
const prompt = require("prompt-sync")()

precoPaoUnidade = prompt("Informe o valor do pão: ")

troco = meuDinheiro - (10*precoPaoUnidade)

if (troco > 0){
    compraChocolate = true
}