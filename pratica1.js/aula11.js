//throw e try/catch
//throw seria disparar e try e tentar o bloco de codigo e catch e pegar o erro

const { error } = require("console")

//try vai tentar executar e se nao for certo ele vai disparar o erro e o catch vai pegar o erro, exemplo de uso
function meuNome (nome){                                           //criamos uma funçao com nome e o parametro e nome
    if(nome === "oi"){                                               //se o nome for igual o valor e o tipo 
    throw new error("nome precisa ser digitado")   //new vai criar um novo objeto entao(se o nome for igual a ""string vazia ele vai disparar um objeto do tipo erro)
}                                                          //podemos disparar so uma mensagem(throw ("nome precisa ser digitado"))
console.log(nome)

}
//agora faremos o try/catch mas antes essa e a sintaxe base deles
//try{
                                     //o console.log(nome) precisa estar fora do if entao sera exibido na funçao assim que acabar if
//}catch()                          //no try ele tentou colocar na funçao o nome pedrinho assim passando


//agora fazendo
try{
    meuNome("oi")

}catch(error) {                                              //recebeu um parametro com nome e, depois temos um bloco de codigo pra ele
console.log("nao foi possivel")              //o catch ele pegou o objeto criado error e mostrou na tela nao foi possivel
}
                                                

























