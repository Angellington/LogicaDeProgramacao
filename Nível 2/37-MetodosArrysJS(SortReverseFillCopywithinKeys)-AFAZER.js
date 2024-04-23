console.clear()

let numeros = [1, 2, 3, 4, 6, 8, 0, 10, 40, 121, 1, 2, 42]


/* Método sort() - Ele reorganiza os dados de um array e pode colocar funções */
/* "(Essa função faz a ordem)" */
let Negativos = numeros.sort(function(a, b) {
    return a - b
})

console.log(Negativos)

/* Método reverse() - Reverte toda a array*/

let reverso = numeros.reverse()
console.log(reverso)

/* Método fill() - Ele preenche o array com um método estático */
/*        A ser preenchido / Quantos serão */
let fill = numeros.fill(0, 4)
console.log(fill)

/* Método copyWithin - Copia uma parte */
let novo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let Copy = novo.copyWithin(0, 2, 6)
console.log(Copy)

/* Método keys */
let iterator = novo.keys(novo)
console.log(iterator)

for (let key of iterator){
    console.log(key)
}
