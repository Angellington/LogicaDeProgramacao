/* 
1. Linhas e Colunas: Quando você desenha um padrão, está esencialmente lidando
com uma matriz (linhas e colunas). Cada linha será construída através de
caracteres e espaçamentos

2. Increment e Decremento: Para padrões que crescem e depois diminuem, você
geralmente usa loops que aumentam até certo ponto e depois diminuem.

3. Alé, de manipular a quantidade de espaços

*/

/* 
#
##
###
####

1. Na primeira linha tem 1 #
2. Na segunda linha tem 2 #
3. Na terceira linha tem 3 #
*/


// A lógica é que começa com 1 # e vai aumentando a cada linha.
let n = 4;


for(let i = 1; i <= n; i++){
    let spaces = ' '.repeat(n - i);
    let hashes = '#'.repeat(i);
    console.log(spaces + hashes)
}