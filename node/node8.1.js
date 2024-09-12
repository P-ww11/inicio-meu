//vamos criar um modulo para o usuario
const Sequelize = require("sequelize")                                              //para indicar que usaremos o seuqelize por isso o require (pode ser interpretado como exigir o sequelize)
const sequelize = new Sequelize("pedrinhoLouco", "root", "pma2egww11", { // aqui tem 3 parametros (nome da tabela)
    host: "localhost",
    dialect: "mysql"                  
})
const usuario = Sequelize.define("usuario",{     //podemos colocar quantos campos quisermos(nome, email..etc)
    nome:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.TEXT
    },
    idade: {
        type: Sequelize.INTEGER            //integer e numeros inteiro
    }
});
usuario.create({
    nome: "pedro",
    idade:  18
})
usuario.sync({force:true})           //sincronizar o modulo usuario no banco de dados


//como inserir dados no campos que criamos?
//no usuario e 
//usuario.creat({                       inserir antes de sincronizar
//    nome: "meu nome e pedro",
 //   idade: "tenho 18 anos"              //essa e a sintaxe
//})