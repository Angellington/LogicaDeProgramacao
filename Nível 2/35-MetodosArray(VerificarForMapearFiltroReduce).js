console.clear()

let musicas = ["phony", "venom", "Future", "Lower", "Idsmile", "Potatos"]

console.log(musicas[0])

// Método Includes()
//(E é claro, você pode definir a partir de quando começará a contar)
console.log("Tem a música Irony?", musicas.includes('Irony')) // Retornará False
console.log("Tem a música Phony?", musicas.includes('phony')) // Retornará True


// Método forEach()
// Executa uma função para elemento array

let numeros = [1, 2, 3, 4, 5]

function imprimir( numero, indice) {
    console.log(`O número ${numero}, está no indice ${indice}`)
}

numeros.forEach(imprimir)

// Método Map()
// Ele mapeia uma função, e aplica esse array a essa função e cria um novo array

numeros = [1, 2, 3, 4, 5]

function dobrarNumero(numero) {
    return numero * 2
}

let Dobrados = numeros.map(dobrarNumero)
console.log("Antes dos números serem dobrados: ", numeros)
console.log("Depois de serem dobrados: ", Dobrados)


// Método Filter()
// Criação de um novo array que passa por uma função como filtro. E passa por cada elemento

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function Pares(numero){
    return numero % 2 === 0
}

APares = numeros.filter(Pares)

console.log("Os números pares: ", APares)

// Método Reduce() e ReduceRight()
// Reduz o Array em um único valor, da esquerda para a direita

numeros = [1, 2, 3, 4, 5]

let soma = numeros.reduce(function(acumulador, numero){
    return acumulador + numero;
}, 0)

console.log(soma)

// Reduce Right
let frase = ["Olá", " ", "Mundo"]

let completo = frase.reduceRight(function(acumulador, numero){
    return acumulador + numero
})
console.log(completo)
