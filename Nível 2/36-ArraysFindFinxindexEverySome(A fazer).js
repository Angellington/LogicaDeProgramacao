console.clear()

let languages = [1, 1, 2, 2 ,1 ,5 ,1 ,5]

/* Método find() - Retorna o primeiro elemento em que um array satisfaz um teste de função fornecida (Se nao, underned é retornado*/

/* Retorna o primeiro valor do array determinado por uma função */

let primeiroPar = languages.find(function(languages) {
    return languages % 2 === 0;
  });

  console.log(primeiroPar)

/* Retorna o index do primeiro array determinado por função */
let indexPrimeiroPar = languages.findIndex(function(languages) {
    return languages % 2 === 0;
  });

console.log(indexPrimeiroPar)

/* Método Every() - Verifica se todos os elementos assumem uma condição determinada por uma função */

let SaoPositivo = languages.every(function(languages) {
    return languages > 0
})

console.log("São positivos?: ", SaoPositivo)


 

