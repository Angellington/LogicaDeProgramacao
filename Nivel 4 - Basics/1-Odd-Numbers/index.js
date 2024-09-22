// Contagem de Números Pares: Conte quantos números pares existem entre 1 e 50.
// Number Odds Counts: Count how many odd number is in 1 and 50

// Make a for with 50 numbers
console.clear()

const numbers = [];

// for(let i = 0; i < 51; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }


let n =  0;

while (n < 50){
    n++
    if(n  % 2 ===0){
        numbers.push(n)
    } else {
        continue
    }
}

console.log(numbers)