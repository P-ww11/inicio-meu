//exemplo que e um menu de restaurante 
var readline = require("readline-sync")
console.log("lanchonete: ")       //exemplo o lanche 10 foi pedido e o 10 e o xtudo
var pedido =  readline.questionInt("10- x tudo\n 11- bomba\n 12- dog na chapa:  ")    //usa o \n para deixar os string separados
switch (pedido){
    case 10:
    console.log("SEU PEDIDO FOI UM X TUDO")
    break
    case 11:
    console.log("SEU PEDIDO E UMA BOMBA")
    break
    case 12:
    console.log("SEU PEDIDO E UM DOG NA CHAPA")
    break
    default:
    console.log("NAO TEMOS NO CARDAPIO")
}