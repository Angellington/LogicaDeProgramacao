//  Imagine que seu professor deu 2 provas e 1 trabalho 
// durante o semestre letivo. A primeira prova teve peso 2. 
// A segunda prova teve peso 3. E o trabalho teve peso 4.  
// Agora que você é um programador, você deseja criar um programa que calcule a sua média nesse semestre. 


//Lógica
// 2 provas e 1 trabalho (prova 1 teve peso dois)

// ((Nota1*2)+(Nota2*3)+(Trabalho*4)
//  ---------2+3+4-----------------

// Importar a Biblioteca de Entrada "Prompt"

// Import
const prompt = require("prompt-sync")()

console.clear()
let prova1 = prompt("Qual foi sua nota na primeira prova? ")
let prova2 = prompt("Qual foi sua nota na prova 2? " )
let trabalho = prompt("Qual foi sua nota no trabalho?")

let resultado = ((prova1*2)+(prova2*3)+(trabalho*4)/2+3+4)

console.log("A sua média ponderada é: ", resultado)

