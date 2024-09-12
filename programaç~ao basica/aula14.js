//vamos criar uma funcao com a media do aluno
function situaçaoAluno(media){
    if (media >=6){                                   
        return "aprovado"                                  
      }else if (media>=4 && media <6){
         return"reprovado"
       } else{
          return" se fudeu"
     }    
}
var readline = require("readline-sync")
var soma = 0
var nome = readline.question("qual e seu nome: ")
for (let c = 1; c<=4; c++){
    var nota = readline.questionFloat("qual e sua nota"+ c+": ")
    soma +=nota                         //a soma nao vai aaperecer entao e preciso criar o console.log
}media = soma /4
 var situacao = situaçaoAluno(media)                                    //e se quisermos a media e so dividir a soma por 4 notas
                                               //media e sempre o total dividido pela quantidade
console.log("o aluno teve "+ situacao)
  //let permite voce mudar o valor dentro da variavel quantas vezes quiser

  
 
                            
