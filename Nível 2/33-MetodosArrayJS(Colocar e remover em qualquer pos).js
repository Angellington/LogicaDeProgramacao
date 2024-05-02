console.clear()

// Métodos do Javascript com arrays

let teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Quantidade da lista
console.log("Método Lenght: ", teste.length)


//push() - Adiciona mais itens no array

teste.push(11, 12, 13, 14, 15)
console.log(teste)

//pop() - Retira o último item e retorna o valor

let removido = teste.pop()
console.log("O que restou: ", teste)
console.log("O que foi tirado: ", removido)

//shift() - O primeiro é removido e retorna o valor

let primeiro = teste.shift()
console.log("Primeiro removido: ", primeiro)
console.log("O que restou: ", teste)

//unshift() - Adiciona no começo, reconta a array

let unshifit = teste.unshift("Battata")
console.log(unshifit)
console.log(teste)

//splice() - Adiciona ou remove um item de uma array em qualquer posição

//                      (A partir do 2, 10 itens serão removidos)
let splice = teste.splice(2, 10)
console.log("Retorno de Splice: ", splice)
console.log(teste)
