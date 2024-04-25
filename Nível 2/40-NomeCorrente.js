/*  Faça um programa que crie um vetor para abrigar 5 nomes de pessoas. 
Também crie uma variável que guardará a posição de um vetor. 
Depois, indique que a posição é 3 e que nesta posição deve ser armazenado o nome Amanda. 
Exiba na tela o conteúdo da posição corrente. */

console.clear()

/*  Faça um programa que crie um vetor para abrigar 5 nomes de pessoas. */
let nomes = ['Isabela', 'Camila', 'Matheus', "Batata", 'Angel']

/*Também crie uma variável que guardará a posição de um vetor. */
let posNomes = nomes[3]
console.log(posNomes)
/*Depois, indique que a posição é 3 e que nesta posição deve ser armazenado o nome Amanda. */

// Nova variável que troca o valor = método splice (start, método index of procurar o 'Batata), trocar apenas 1, por amanda
let NovoNomes = nomes.splice(nomes.indexOf('Batata'), 1, 'Amanda')
console.log(NovoNomes)

console.log(nomes)


// Wait a easy method?
let lista = ['Isabela', 'Camila', 'Angel', 'Batata', 'Meiko']

let pos = 3
lista[pos] = 'Amanda'

console.log(lista)