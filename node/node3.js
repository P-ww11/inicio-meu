//http para chamalo precisamos enserir em uma variavel
var http = require('http') //require e para chamar um modulo e nois esta chamando o http
http.createServer(function(req,res){
    res.end("ola bolsonaro")
}).listen(8081);                       //precisa abrir um servidor para o cliente e para chamalo e create server
                                           //e depois precisamos abrir uma funcao listen ela serve para chamar em qual porta de rede voce quer abrir o servidor

 console.log("o servidor esta rodando")     //e se der pra comentar abaixo e porque o servidor esta rodando
                                            //e para acessalo na web digite localhost e a porta que ficaria localhost:8081
                                            //ele so rodou o servidor e nao aparece porque nao tem nada la dentro e para ter precisa
                                             //para fechar o servidor e atualizar e ctrl+c
                                             //para exbir msg a funcao createserver tem outra funcao dentro que e funcao de come back que dentro dela tem dois parametros (req,res)req de requisiçao e res de resposta
                                             //o res e o que faz exibir na tela e ficaria mais ou menos assim: function(req,res){} dentro do createserver
                                            //res.end e para começar a exibir o texto 
                                            //sempre no node.js precisa desligar e ligar o servidor
                                            //e para mostrar o res basta entrar no servidor com o portal









