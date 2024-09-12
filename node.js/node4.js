//criando rotas so que usando express 
//vamos criar um servidor basico pra usar dps o express
//const http = require("http")
//const porta = process.env.PORT                                  //isso faz com que se nao souber qual porta usar ele pega essa porta da aplicaçao

//servidor = http.createServer((req,res)=>{
//    res.statusCode= 200
//res.writeHead (200,{"content-type":`text-plain`})                                               //res.writheHead e escrever no cabeçalho
//   res.end("oi")
//})

//servidor.listen(porta || 8081,()=>{console.log("servidor criado")})              //nois passou a porta do servidor ou 8081  e depois colocamos o backlog pra exibir quando criar
 

//utlizando express
const express = require("express")        //pegando o modulo express e dps passamos a uma variavel app
const app = express()
const porta = process.env.PORT //isso faz com que se nao souber qual porta usar ele pega essa porta da aplicaçao

app.get ("/",(req,res)=>{       //nois informamos pro get o formato da rota e a funçao dele ao ser colocado o formato expecificando o que vai acontecer quando for acessada
    res.send("ola nobru filho no brumenau")       //res e retorna e send e mandar e () e onde vai ficar o conteudo que vamos mandar
} )                                   //app e nois usamos get como chamada
app.get("/ola", (req,res)=>{             //o json pra enviar o conteudo precisa ser colocado em chaves
    res.json({canal:"do carlinhos e os mil cavalos"})
})
app.listen(porta || 8081,()=>{console.log("servidor criado")})
//req e res ele significa meio pegar a requisiçao e retorna a resposta





















