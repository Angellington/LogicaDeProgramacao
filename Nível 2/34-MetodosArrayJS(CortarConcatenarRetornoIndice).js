console.clear()

let amigos = ["Batata", "Aeron", "Farofa", "Pepsi", "Okyu", "Socorro", "Mari", "Ray"]

for (let i = 0; i < 8; i++){
    console.log(amigos[i])
}

// Método slice - Retorna uma cópia do que foi selecionado

                    //Espaço pra cópia
let slice = amigos.slice(1, 5)
console.log("Retorno de Slice: ", slice)
console.log(amigos)

// Método Concat - Junta dois ou mais arrays
let AmigosDubs = ["MiniKnight", "Mikisu", "Astra", "Rainha"]

let NovaArray = amigos.concat(AmigosDubs)
console.log(NovaArray)

// Método Join() - Separar toda a lista em uma única string
//                  (separador)
let join = amigos.join(" ")
console.log(join)

// Métodos indexOf() - Procura o index de um array
let indexOf = amigos.indexOf("Socorro")
console.log(indexOf)

                            //Informação, Indice que comaça a ser procurado
let indexOf2 = amigos.indexOf("Okyu", 8)
console.log(indexOf2)

// Método lastIndexOf() - Retorna o último valor do index se procurar

ultimo =  amigos.lastIndexOf('Batata', 3)
console.log(ultimo)