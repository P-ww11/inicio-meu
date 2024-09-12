//switch casa significa: troque caso ou (escolha caso)vai ter uma variavel como parametro e dependendo do resultado da variavel ele vai executar uma açao expecifica
//sendo switch(variavel){
//} case<resultado seja esse valor>
//break                          e obrigatorio executar esse comando depois de cada case significa break= (parar)
//execute esse bloco de codigo
//default (caso nao seja nenhum resultado        nao precisa de break
//execute esse outro bloco de codigo)

//em pratica

var readline = require("readline-sync")
var sexo = readline.question("informe seu genero:/n M para masculino /n F para feminino:  ")
var sexoM = sexo.toUpperCase()         //que pega a variavel sexo que criamos e colocamos em to uppercase(tudo maisuculo)e trocamos o switch
switch(sexoM){
case "F":                                 //precisa estar tudo no case para rodar o codigo
   console.log ("sexo feminino")           //e necessario colocar break para nao rodar o de baixo
   break                                    //se voce coloca maiusculo o codigo so rodara maisuculo
   case "M":                                //tem um jeito para que isso nao aconteca de maisuculo que e to uppercase
   console.log("sexo masculino")            //var sexoM = sexo.uppercase para converter tudo se for minusculo para maisuculo
   break
   default:                                      //nao usamos switch para operadores logico algo matematico, ai usaremos if e else
   console.log ("sexo invalido")
}



