//criaremos um formulario
//colocando modulos em variavel
const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const Sequelize = require('sequelize')
//config
//templete engine
app.engine('handlebars', handlebars.engine())               //configurar o handelbars        
app.set('view engine', 'handlebars')
//conexao com o banco de dados                                             
const sequelize = new Sequelize("jorel", "root", "pma2egww11", { 
    host: "localhost",
    dialect: "mysql"                  
})
//criando uma rota
app.get("/",(req,res)=>{
    res.send("rota inicial")
})
app.get("/jorel",(req,res)=>{
    res.send("rota de cadrasto")                                            
})//abrindo o servidor
app.listen(8081,()=>{
    console.log("servidor rodando")
})