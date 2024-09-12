//aprenderemos sobre classes
//sintaxe de classe
class nomeclasse {            //a class ela cria um nome com objeto e o constructor ela construtor da nossa classe
    constructor() {
    }             
}
//um exemplo de classe 
class carro {
    constructor(nome, ano){     //passamos dois parametros de nome e ano do carro e usamos this para ele entender que aquilo esta apontando pro objeto construtor
    this.nome = nome
    this.ano = ano              //propriedade this.nome e this.ano
    }
}
const carro1 = new carro("lamburguini", 2019)        //devemos colocar em string o nome pq se estiver fora ele consta como caracter indefinida
const carro2 = new carro("toyota", 2011)           //criamos uma variavel para ele acessar a classe carro e passamos o parametros pra ele acessar a classe

console.log(carro1)
console.log(carro2)
 