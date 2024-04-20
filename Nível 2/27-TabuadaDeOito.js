// Escreva um algoritmo que calcule e imprima a tabuada do 8 (1 a 10). 

let numerando = 8
let numerador  = 0

//Método For
for (numerador = 0; numerador <= 10; numerador++){
    console.log(numerando, "x", numerador, "=", (numerando * numerador))
}

//Método While
numerando = 8
numerador = 0

while (numerador <= 10){
    console.log(numerando, "x", numerador, "=", (numerando * numerador))
    numerador++
}

//Método While Do
numerando = 8
numerador = 0

do {
    console.log(numerando, "x", numerador, "=", (numerando * numerador))
    numerador++
} while(numerador <= 10)