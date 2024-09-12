//falaremos sobre as arrow functions, arrow function e uma expressao de funçao
//relembrando o que e expressao e declaraçao de funçao
let espressao = function () {                //aqui criamos uma expressao guardado em uma variavel que tem o retorno console.log
    console.log("minha expressao")
} 
espressao()

function minhaDeclaraçao() {              //aqui e uma declaraçao literal de uma funçao com o retorno console.log
    console.log("minha declaraçao")
}
minhaDeclaraçao()
 //arrow function e uma expressao de funçao exemplo e arrow function e uma expressao anonima que nao tem nome
//essa e a sintaxe dele
 const funcao = () =>{
    console.log("ola kleber")
 }
funcao()
//o this da arrow function se liga ao escopo que ela foi declarada 
const thisGlobal = () =>{
    console.log(this)
}//ainda sim ele aponta pro local mesmo se for obj
const objeto = {
    thisLocal: ()=> console.log(this)
}
objeto.thisLocal()
//para ser envolvida precisa ser encapsulada pro outra funçao
const objeto1 = {
    thisLocal:function(){
      let amostra = ()=> console.log(this)()                    //pra ver aonde ta apontando precisa da iife 
    } 
}
objeto.thisLocal()
//aqui nois esta apontando pro this local que e o objeto



































