//sequelize e um banco de dados igual o mysql so que vamos conectar ele aqui no node
//usar o banco de dados mysql usando o sequelize
const Sequelize = require("sequelize")                                              //para indicar que usaremos o seuqelize por isso o require (pode ser interpretado como exigir o sequelize)
const sequelize = new Sequelize("pedrinhoLouco", "root", "pma2egww11", { // aqui tem 3 parametros (nome da tabela)
    host: "localhost",
    dialect: "mysql"                  
})
sequelize.authenticate().then(function(){                                      //then e que nem uma funçao de comeback ela e executda depois de um evento
    console.log("entrado com sucesso")                                            //sequelize.authenticate e para se conectar ao banco de dados que colocamos caso de certo sera executado a funcao then e caso der falha sera executado a funcao catch
}).catch(function(error){                     
    console.log("falha ao se conectar"+ error)
}) 





