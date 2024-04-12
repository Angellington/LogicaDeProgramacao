programa
{
   funcao inicio()
   {
      inteiro vetor[6]
      para (inteiro pos = 0; pos < 6; pos++){
         escreva("Informe o número da posição "+(pos+1)+": ")
         leia(vetor[pos])
      }

      para (inteiro pos = 0; pos < 6; pos++){
         se(vetor[pos]<0){
            escreva("O valor "+vetor[pos]+" é negativo\n")
         }
      }
   }
}


/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 360; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */