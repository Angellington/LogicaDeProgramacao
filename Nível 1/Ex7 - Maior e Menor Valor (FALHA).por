programa
{
// Faça um programa que leia 100 números inteiros e no final, escreva o maior e o menor valor lido. 	
	funcao inicio()
	{
		inteiro contagem = 1, valor = 0, maior, menor

		maior = valor
		menor = valor

		escreva("Leia um valor: ")
		leia(valor)

		para (contagem = 1; contagem < 10; contagem++)
		leia(valor)
			se (maior < valor) {
				maior = valor
			}
			se (menor > valor) {
				menor = valor
			}

		escreva("O maior valor é ", maior)
		escreva("O menor valor é ", menor)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 502; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */