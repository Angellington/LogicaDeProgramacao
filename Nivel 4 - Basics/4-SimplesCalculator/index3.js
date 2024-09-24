console.clear()
// Import libraries
const prompt = require('prompt-sync')();
const color = require('colors');

// - Steps -
// 1 - A simple menu, choosing what option by calculator
// 2 - Select a number functions, (choosing numbers or more)
// 3 - After, choose the function for operator
// 4 - If you want to calculate again

console.log('|--SIMPLE-CALCULATOR--|');
console.log('|-|--1---2---3---|-+-||');
console.log('|-|--4---5---6---|---||');
console.log('|-|--7---8---9---|-x-||');
console.log('|-|------0-------|-:-||');
console.log('|TTTTTTTTTTTTTTTTTTTT||');
console.log(' ')


let start = prompt('Iniciar'.yellow)
console.clear()


let numbers = [];

console.log('|--SIMPLE-CALCULATOR--|'.yellow);
console.log(' ')


while (true){
    let number = Number(prompt('Adicione um numero: '));
    if(!isNaN(number)) {
        console.clear();
        numbers.push(number);
        console.log(numbers.join(' '.blue));

        let operator = prompt('Please, insert the operator(+/-/x/:)\nTab(D) - To Finish\n'.yellow);

        if(['+', '-', 'x', ':'].includes(operator)){
            console.clear();
            numbers.push(operator);
            console.log(numbers.join(' '));
        } else if (operator === 'D' || 'd'){
            console.clear()
            console.log('Calculando o resultado...');
            break;
        } else {
            console.log('´Operador inválido! Tente novamente.')
            continue
        }
    } else {
        console.log('Operador inválido! Tente novamente.')
        continue
    }
}

let expression = numbers.join(' ').replace(/x/g, '*').replace(/:/g, '/');
console.clear()
try {
    let result = eval(expression);
    console.log(`Resultado: ${result}`.green);
} catch (error){
    console.log('Erro ao calcular a expressão.')
}