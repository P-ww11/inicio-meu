// no node6 vamos aprender a exibir arquivo html nas rotas inves de textos
//criaremos uma html base usando o comando ! e inserindo titulos e textos neles
//inves de estar mandando texto no res.send nois iremos inviar um arquivo html e vamos colocar ele 
const express = require('express')

const app = express()             //devemos falar que o arquivo esta no diretorio da nossa aplicacao e para falar isso usaremos uma variavel chamada __dirname
                                    
app.get("/",(req,res) => {                   //send = mandar e file = arquivo ou seja mandar arquivo
    res.sendFile(__dirname+"/index.html")            //vai criar o dirname que vai no diretorio raiz que onde as pasta fica e vai contatenar(+) com o nome da pasta e do arquivo que e o index.html
} )                                                              //ele pegar dentro da pasta pois o index.html esta dentro de outra por isso
app.get("/ola",(req,res) => {                                     //diretorio raiz seria dentro da pasta eu dentro da pasta node e dentro da pasta node6.js e la estara o arquivo
    res.sendFile()
})
app.listen(8081, () =>{
    console.log("voce entrou no servidor")
})