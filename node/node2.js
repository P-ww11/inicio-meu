//aprenderemos a usar modulo que e separar os arquivos para nao ficar muito grande
//para entender melhor precisamos criar variaveis que armazena funcoes de numero em arquivos distintos
//criamos as funcoes, agora usaremos pra criar um modulo nos arquivos(module.exports =
//pode exportar string qualquer coisa que esteja na varivel
//dps de tudo isso voce tera que fazer require("./node2.1") ./ significa pegar aquivo da mesma pasta  e depois o nome do arquivo(nao precisa da extensao .js)
const soma = require("./node2_2");                   
//e precisa igualar isso a uma variavel
console.log(soma(6,4));     //aqui eu defini a,b sendo 6,4 na soma

