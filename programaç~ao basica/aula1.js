//console.log("hello world") e tipo para exibir na tela exemplo o pyton e print no javascript e console.log
//var numero = 5.6 e sempre um ponto se for colocar decimal e tambem se quiser pode colocar ; no final
//isso serve para numeros reais e inteiros
//var nome = "seila" e uma variavel nome do tipo string que contem texto letras
//var dirige = true e um valor boleano contendo false ou true
//exemplo
var numero = 5.7
var nome = "joana"
//console.log(numero) se apertar alt+shift+para baixo ele meio que replica o item 
//dentro do string nois podemos usar ${} para puxar uma variavel isso e contatenar string com variavel
//ou podemos adcionar ela
console.log ("seu nome e " + nome) // para separar e nao ficar junto sempre de um espaço no final do string e no começo
var dirige = true
//juntando os codigos ficaria
console.log ("seu nome e "+ nome + " sua pontuaçao no detran e "+ numero + (" dirige? " + dirige))
//ou podemos usar
console.log ("seu nome e: " + nome)
console.log ("meses de habilitaçao: " + numero)
console.log ("dirige?: " + dirige)
//Var é a forma antiga e pode ser confusa porque tem escopo de função, o que significa que ela pode ser acessada de qualquer lugar dentro da função onde foi declarada. Let e const são mais modernos e têm escopo de bloco, o que significa que só podem ser acessados dentro do bloco onde foram declarados.
//no javaScript para criar um objeto e
//sintaxe

let pessoa = {
    nome5: "joao"         //criamos um objeto bascimente criar uma juncao em um lugar so que pode acessar pela propriedade daquele objeto 
}                         //no objeto pode conter string boleano e numero ao mesmo tempo
console.log(pessoa)
