//usaremos parametros no servidor que criamos 
const express = require("express")
const app = express()
app.get("/",(req,res)=>{
    res.send("ola mundo")
})
app.get("/doi",(req,res)=>{
    res.send("doidinho")                       //podemos colocar qualquer coisa no parametro 
}) 
app.get("/jose/:cor/:cargo",(req,res)=>{                    // criamos um parametro na rota jose quando coloca /: significa que vamos criar um parametro e nois o nomeoou como cor
    res.send("sua cor e: "+req.params.jose)                          //parametro e um valor dinamico que um usuario consegue passar
})                                                  //req e a primeira variavel depois de comeback que serve para receber dados de uma requisiçao(obter dados da requisicao que esta no http inclusive parametros)
app.listen(8081,()=>{                                //o req.params pega todos os parametros para escolher so um basta colocar req.params.cor ou o nome do parametro que voce quer
    console.log("abrindo servidor")                  //agora dentro da rota jose nois criaremos um parametro chamado cor
})                                                     //inves de mostrar so o o ai meu brao podemos colocar o parametro(req.paramets)
 //em um parametro so pode ter 1 res.send caso queria ter mais pra exibir basta colocar todos em 1 so res.send




