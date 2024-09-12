//nessa aula usaremos oexpress para desenvolvimento de cadastro de usuario
const express = require('express')                  //criamos uma variavel para definir o express e armazenamos ela em um valor app
const app = express() 
//precisamos instalar o handlebars no npm(ele serve para exibir dados que vem do back end em arquivo html)
const handlebars = require('express-handlebars') //criamos uma variavel handle que vai receber o modulo express que dentro do express tem o handlebars
//precisamos congigurar o handle e para isso precisamos expecificar em codigo para o express que usaremos o handle como templete engine pois existe muitos templete no mercado node e precisamos falar qual usaremos
app.engine('handlebars', handlebars({defaultLayout:main})) 
app.set('view engine', handlebars)
//nessas linha falamos pro expresss que usaremos o handlebars como templete engine
//depois temos que criar uma pasta chamada views exatamente desse jeito
//e dentro da pasta views vai ter outra pasta chamada layouts e dentro da pasta layouts criaremos o arquivo chamado main.handlebars
//na linha 7 o main e o templete padrao da aplicacao 
//dentro do arquivo main devemos fazer uma estrutura base do html
//no codigo 7 o defaulylayouts: main nos esta falando o layout padrao vai estar na pasta layouts que criamos que e o arquivo main que dentro e uma estrutura html
//configuramos o templete engine
// agora vamos configurar nossa conexao com banco de dados diretamente do arquivo que fizemos o templete
const Sequelize = require("sequelize")                                              
const sequelize = new Sequelize("pedrinhoLouco", "root", "pma2egww11", { 
    host: "localhost",
    dialect: "mysql"                  
})




























