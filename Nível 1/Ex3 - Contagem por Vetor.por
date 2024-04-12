programa
{
	
	funcao inicio()
	{
		// Faça um programa que crie um vetor de 10 números inteiros. Em seguida, peça para o usuário informar os 10 valores. 

		cadeia numeros[10] = {"n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9", "n10"}

		para(inteiro i = 0; i < 10; i++){
			leia(numeros[i])
			escreva("\n")
			escreva("O valor do número é ", numeros[i])
			escreva("\n") 
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 394; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */