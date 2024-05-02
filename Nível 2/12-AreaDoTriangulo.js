// : No Portugol Studio, escreva um programa que leia 2 valores: lado e altura. 
// Após, calcule a área do triângulo, sabendo que a fórmula é área = (base * altura) / 2

const prompt = require("prompt-sync")()

console.clear()
let lado = prompt("Qual é o lado? ")
let altura = prompt("Qual é a altura? ")

triangulo = (lado * altura) / 2

console.log("A área do triângulo é a seguinte: ", triangulo)

