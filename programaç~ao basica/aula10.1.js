//usaremos a estrutura for para uma senha fazendo com que o usuario tenha 3 tentativas
var readline = require("readline-sync")
var senhacorreta = 123
for(let c = 1;c <= 3; c++){                        //porque se ele vai insirir 3 vezes entao tem limite por isso esta dentro ja do laço de repeticao
var senha = readline.questionInt("insira sua senha em numero: ")
if ( senha == senhacorreta){
console.log("senha correta ")
break 
} else if (senha != senhacorreta){           //aqui nois criamos uma senha onde se nao for 123 ela dara incorreta e se repitira ate acerta com 3 tentativa
    console.log("usuario negado")          //else if e se a senha for diferente da senha que criamos entao sera incorreta
}                                         //onde o laço se acabara quando o c for maior que 3 
if (senha !=senhacorreta && c == 3) 
    console.log("bloqueado")                                     //colocamos tudo isso dentro da estrutura for 
}                                                 //e para o laço parar caso a senha der correto e so colocar break
                                                 //podemos criar quando as 3 senhas derem errada meio que bloquear
                                                //se o c chegar em 3 e der incorreta ainda pode as duas condiçoes nesse if tem que ser verdadeira, ai ele vai bloquear
                                                //nois criamos if porque o else if( se nao) nao contradiz 