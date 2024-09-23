// Vogal Count
console.clear()

// Insert
const prompt = require('prompt-sync')();
const colors = require('colors');

// Vogals array
// Foi criado o array
let vogals = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

// Inserção de dado
let phrase = prompt('Please, insert a phrase: ');
// print da frase
console.log(`${phrase}`.green)

// Variaveis com valores iniciais
let = vowelCount = 0;
let = consonantCount = 0;

// Iterando frase
for(let char of phrase) {
    // Verificando o alfabeto
    if (char.match(/[a-zA-Z]/)) {
        if (vogals.includes(char)) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }
}

console.log(`Vogais: ${vowelCount}`);
console.log(`Consoantes: ${consonantCount}`)

