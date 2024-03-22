programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		inteiro L
		real D
		// Diagonal do quadrado	
		// d = l.raiz de 2
		escreva("Diagonal do quadrado \n")
		escreva("\n")
		escreva(" ______\n")
		escreva("|     /|\n")
		escreva("|   D  L\n")
		escreva("|/__L__|\n")
		escreva("\n")
		escreva("D = l.√2\n")
		escreva("\n")
		
		escreva("Escreva o valor de L:")
		leia(L)

		escreva("\n")
		escreva(" ______\n")
		escreva("|     /|\n")
		escreva("|   D  ",L,"\n")
		escreva("|/__",L,"__|\n")
		escreva("\n")

		D = L*(mat.raiz(2, 2))

		escreva("\n")
		escreva(" ______\n")
		escreva("|     /|\n")
		escreva("|   ", D, "  ",L,"\n")
		escreva("|/__",L,"__|\n")
		escreva("\n")

		escreva("A diagonal do quadrado é: ", D)
		
		

		
		
		
		
		
		
		}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 689; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */