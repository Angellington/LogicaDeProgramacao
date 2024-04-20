// Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

const prompt = require("prompt-sync")()
//Biblioteca de Entrada

console.clear()

valor1 = prompt("O valor 1: ")
valor2 = prompt("O valor 2: ")
valor3 = prompt("O valor 3: ")

//Converter para Number
valor1 = parseInt(valor1)
valor2 = parseInt(valor2)
valor3 = parseInt(valor3)

if (valor1 > valor2 && valor3 > valor2){
    console.log("O valor 1 é maior!")
} else if (valor2 > valor1 && valor3 > valor1) {
    console.log("O valor 2 é maior!")
} else {
    console.log("O valor 3 é o maior")
}