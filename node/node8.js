//para fazer tabelas no mysql no terminal depois de entrar no terminal usaremos
//show database;                 sempre; no final de cada linha no terminal
                                      //show database  vai mostrar todos os bancos de dados guardado
//create database jorel            nois criamos um banco de dados com o nome que quisermos
//use jorel                        ele vai acessar um banco de dados expecifico: use que e usar e o banco de dados que criamos(jorel)
//dentro de cada banco de dados exite uma estrutura que e a tabela com linhas e colunasque guarda os usuarios,senha... basicamente um cadastro
//tipos de dados
//texto,caractere,int(para numeros), float(para numeros decimais), date(datas),blob(para arquivos)
//agora para criar uma tabela dentro do banco de dados que criamos
//use jorel

//como criar um modulo:  modulo e uma referencia da tabela dentro do sequelize(criaremos um modulo que vai gerar uma tabela)
//criaremos 2 modulo 1 para postagem e outro para o usuario
const { Sequelize, DataTypes } = require('sequelize'); //precisamos definir a sequelize em uma variavel para ela nao ficar indefinida
const postagem = Sequelize.define('postagem',{
    titulo:{
        type: Sequelize.STRING                     //o tipo do titulo sera string(que armazena caracter)
    },
    conteudo: {                                        //esses serao os campos(titulo,conteudo) que seria os conteudos na tabela
        type: Sequelize.TEXT                    //string e texto sao diferente pois string tem limite e texto e ilimitado 
    }
})   //criar uma variavel com o valor postagem e nela e tem o atributo sequelize e o define para definir um modulo e dentro do () sera o nome da tabela e depois usar o objeto e chaves que seria oss campos
//os tipo e tudo maiusculo
//depois chama a variavel para sincronizar
postagem.sync({force:true})      //sync e para sincronizar o nosso modulo, criamos um objeto com o parametro force true para ter certeza que a tabela vai ser gerada


























