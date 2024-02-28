programa
{
	
	funcao inicio()
	{
		// Imagine que seu professor deu 2 provas e 1 trabalho durante o 
		//semestre letivo. A primeira prova teve peso 2. A segunda prova 
		//teve peso 3. E o trabalho teve peso 4.  Agora que você é um programador, 
		//você deseja criar um programa que calcule a sua média nesse semestre. 
		//Como seria este programa no Portugol Studio?

		real prova1, prova2, trabalho, MediaPonderada

		escreva("Fulano, quais foram suas notas nesse semestre? \n")
		escreva("Resultado da prova 1: ") leia (prova1) // peso 2
		escreva("Resultado da prova 2: ") leia (prova2) //peso 3
		escreva("Resultado do trabalho: ") leia (trabalho) // peso 4

		MediaPonderada = (prova1*2)+(prova2*3)+(trabalho*4)/9

		escreva("Então a sua média ponderada será ", MediaPonderada)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 376; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */