/*
01 - Encontre o maior numero de um array

Escreve um algoritmo que recebe um array de numeros inteiros, procure o maior valor e o retorne

*/
console.clear()

const prompt = require('prompt-sync')();


let number = []


while (true){
    let n = Number(prompt('Insert a number: '));

    if(isNaN(n)){
        console.log("Não é um numero")
        continue
    }

    if (n === 401){
        console.log("Saindo do Loop")
        break
    } else {
        number.push(n)
    }
    console.clear()
    console.log(number)
}

if(number.length > 0){
    let maiorNumber = Math.max(...number);
    console.log(`O maior numero é: ${maiorNumber}`)
}

