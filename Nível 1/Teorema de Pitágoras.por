programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{

		real a, b, c

		// Teorema de Pitágoras

		// Passo 1 - Criar a função
		// Passo 2 - Da função, inserir os valores
		// Passo 3 - Aplicar
		// a² = b² + c²

		
		escreva("Teorema de Pitágoras \n")
		escreva(" \n")
		escreva("              / | \n")
		escreva("           /    |\n")
		escreva("        c       | \n")
		escreva("      /         a\n")
		escreva("   /            |\n")
		escreva("/________b______| \n")
		escreva(" \n")
		escreva("a² = b² + c² \n")
		escreva(" \n")

		escreva("Valor de b:")
		leia(a)
		
		escreva(" \n")
		escreva("              / | \n")
		escreva("           /    |\n")
		escreva("        c       | \n")
		escreva("      /         ", a, "\n")
		escreva("   /            |\n")
		escreva("/_______________|\n")
		escreva(" \n")


		
		escreva("Valor de c:")
		leia(b)

		escreva(" \n")
		escreva("              / | \n")
		escreva("           /    |\n")
		escreva("         c      | \n")
		escreva("      /         ", a,"\n")
		escreva("   /            |\n")
		escreva("/________", b, "____|\n")
		escreva(" \n")



		c = (b*2) + (a*2)
		c = mat.raiz(a, 2)
		escreva("c = ", c)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1121; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */