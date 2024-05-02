console.clear()

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

/* values() - Retorna um novo valor iterador (Vertial)*/

let iterator = numeros.values()
console.log(iterator)

for (iterator of numeros){
    console.log(numeros)
}

/* from() - Faz um array de strings) */

let words = "More Than Words"
from = Array.from(words)
console.log(from)
