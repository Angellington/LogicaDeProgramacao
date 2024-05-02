// Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem crescente. 
console.clear()


//Método For
let valor = 0
valor = parseInt(valor)

for (let i=0;i < 11;i++){
    console.log(valor + i)
}

//Método While
i = 0
valor = 0
while (i < 11){
    console.log(valor + i)
    i++
}

//Método While Do
i = 0
valor = 0

do {
    console.log(valor + i)
    i++
} while (i<11)