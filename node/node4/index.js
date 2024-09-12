//para exibilo vamos criar um require para chamar modulo e criar uma variavel
const express = require("express")
const app = express()    //a variavel app esta recebendo a funcao express que vem do modulo express ou seja ela cria uma copia pra dentro da var app
                          //o que e funçao de come back? e uma funcao executada depois de um evento que no caso daqui seria o app.listen
                        


app.listen(8081,function(){
    console.log("servidor rodando");      //seria mais ou menos assim o come back
});                    //ou seja qulquer coisa que usar o express sera utilizado apartir da variavel app
                       //agora vamos criar um sv so que no express encurtando os codigos               
                        //pegar a variavel com a funçao listen(ouvir) e abrir o portal pedindo o unico parametro que e a porta
                              //sempre a funcao app.listen deve ser a ultima a ser executada(a ultima do codigo) nao pode ter nada relacionado ao express abaixo dela se nao funciona
 
           //agora pra criar rotas que seria o caminho agora pra funcionar na pratica 
           //ao usarmos o codigo de cima ele da cannot get / pois nao tem rota 







