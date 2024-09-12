//para criar um sv precisamos dar um require a um objeto http pra rodar na web, e feita uma requisiçao que vai nos dar a resposta e nois informa qual porta usaremos
//tem como ver os codigo de erro na web que e http.cat
const http = require('http')   //criamos uma variavel que vai fazer requisiçao a primeira ordem e sempre requisiçao e depois resposta
http.createServer((req,res)=> {          //dois parentese pois estamos pegando o createserver que fazendo uma funçao e o arrow function)                                        //vamos criar um arrow function com as variaveis de requisiçao e resposta res,req
    res.writeHead(200,{
                                                                     //writehead e escrever no cabeçalho, os parms dele sao status nois vai entrar com 200 que e ok e so ver no hhtp.cat
  'content-Type':'text/plain'})                        //aqui vai mostrar o status 200 que vai ter retorno do objeto sendo tipo de conteudo texto normal
res.write("pedro vinicius\n")                        //aqui e o que ele vai ver       
res.end()                                  //o final da nossa resposta
}).listen(8081)                      //o listen meio que e (esse servidor que criamos) sera escutado na porta 8081

//ou seja nois respondeu no cabeçalho do arquivo writehead que os status vai ser 200 (ok) e content-type e tipo de conteudo vai ser texto normal text/plain
//write e escrever ou seja nois vai escrever no cabeçaljo







