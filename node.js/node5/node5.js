//vamos modularizar as rotas fazendo com que criamos um arquivo interno de rotas que fazendo requisiçao no arquivo principal tipo branch
const express =require("express")
const rotas = express.Router()            //utilizar express pra fazer exportaçao de rotas


let cursosI = [
    {"curso de tecnologia":"se quiser sim mano"},               //criamos uma variavel que armazena um array com objetos
    {"curso de pintar o cu do cebo":"cu"},
    {"curso de de cabeça aos pe":"seila"},
    {"curso de pornografia":"odeio"}
]
//rota principal
rotas.get("/",(req,res)=>{
    res.json({ola: "seja macumbado a vida inteira"})            //fizemos o sistema de rot original que ao iniciar o site ja exibi essa mensage
})
//vamos colocar parametros pra rota
rotas.get("/:cursosla",(req,res)=>{
    res.json({ola: "seja inteira"})                   //criamos uma rota que exiba essa mensagem em json
    const curso= req.params.cursosla     
    const cursoInformaçao = cursosI.find(i=>i.curso == curso)                               //find de pesquisar
    if(!cursoInformaçao){                          //se o curso de informaçao for diferente ao de cima que estamos procurando ele exibira erro 404
        res.status(404).json({error: "curso nao encontrado"})
    }else {
        res.status(200).json({cursoInformaçao})      //caso contrario ele ficara ok exibindo em json a pesquisa
    }
})
module.exports = rotas        //exportamos o modulo que armezena a rotas que faz toda essa estrutura

















