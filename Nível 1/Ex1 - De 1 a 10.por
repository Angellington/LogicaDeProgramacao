programa
{
// Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS.	
	funcao inicio()
	{
		inteiro contagem = 0, valor = 0, soma = 0

		para (contagem = 1; contagem <= 10; contagem++)
			leia(valor)
			se (valor < 0){
				soma = soma + 1
			}
				escreva("A quantidade de negativos são: ", soma)

	}	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 318; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */