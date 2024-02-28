programa
{
	
	funcao inicio()
	{
		// No Portugol Studio, escreva um programa que peça o ano atual 
		//e o ano de seu nascimento. A partir dessas informações, calcule 
		//a provável idade da pessoa e exiba na tela
		inteiro AnoAtual, AnoNascimento, SuaIdade

		escreva ("Que ano é agora? ")
		leia(AnoAtual)
		escreva ("Qual é o seu ano de nascimento? ")
		leia(AnoNascimento)

		SuaIdade = AnoAtual - AnoNascimento

		escreva ("Então a sua provável idade é ", SuaIdade, " anos.")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 486; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */