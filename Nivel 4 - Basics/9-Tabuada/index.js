// Tabuada de 1 a 10
console.clear()

//Import Libraries
const prompt = require('prompt-sync')();
const color = require('colors');

for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i * j}`.yellow)
        if (j === 10){
            console.log('------------'.green)
        }
    }
}