//como usar IIFE (immediateley invoked function expression) em portugues e expressao de funçao imediatmente invocada
//a sintaxe da IIFE
(function(){
    //codigo
})()                   //basicamente essa e a iife que e uma funçao declaraçao de funçao dentro de de par de parenteses() e no final tem outro par de parenteses() que e um parentese de chamada
//esse parentese no final e que nois esta chamando uma funçao ou seja a funcao declarada dentro de um par de outro parentese
//isso tudo e como se uma funçao fosse sendo chamada
//tudo que esta dentro do parenteses(a funçao nossa) nao e acessado do lado de fora ele estara so definido dentro da funçao ou dos parenteses
//so da pra acessar se a funçao for colocada em uma variavel se tornando expressao
let minhaf = (function(){
    return 1
})()
console.log(minhaf)





