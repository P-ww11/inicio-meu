//usaremos o mesmo codigo do index para criar rotas
const express = require("express")
const app = express()                     //sempre o app.listen no final do codigo que tiver express relacionado
 app.get("/",(req,res) => {                    //usando a funcao de comeback depois de criar o main utilizamos o function res para exibir na tela
    res.send("ola mundo depois da droga");            //o send e pra enviar a mensagem entao ele enviaria pra rota main usada por /
 }) 
 app.get("/ola",(req,res)=> {
    res.send("kakakakakaakakak");
 })                                                              // usamos o "/"  pois e a rota principal                      
app.listen(8081, ()=>{
    console.log("voce entrou no servidor");                 //inves de function utilizaremos o arrow function  caso o res.send nao rode
})




