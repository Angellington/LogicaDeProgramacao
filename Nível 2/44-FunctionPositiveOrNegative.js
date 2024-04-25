console.clear()
prompt = require('prompt-sync')()

function PosNeg(a){
    if(a > 0){
        return console.log('O número é positivo')
    } else if(a<0){
        return console.log('O número é negativo')
    }
}

let valor = prompt('Digite um valor: ')
valor = parseInt(valor)
PosNeg(valor)



