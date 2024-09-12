//calbacks sao funçoes que recebem outras funçoes que sao executadas em algum momento oportuno,fim das rotinas e fim de eventos
//funçao callback e uma funçao passada pra outra funçao como argumento,  que e invocada dentro de uma funçao externa para compleyar algum tipo de rotina ou açao
const saudaçao = (nome) =>{
    alert(`ola ${nome}`)                 //criamos uma variavel saudaçao que tem o arrow function com o parametro nome 
}     
const processaEntradaUsuario = (callback) =>{            //criamos outra variavel com arrow function e parametro call back que au receber a variavel que recebe dados do usuario(prompt)
    const nome = prompt("digite seu nome ")            //ele atribuiu o nome ao callback sendo declarada e depois disso ele vai executar o codigo saudaçao
    callback(nome)                 
}
//processaEntradaUsuario(saudaçao)
//outro exemplo de um callback depois de um evento
const callba = (e) =>{
    alert("aconteceu um evento"+ e.type)      //pra ele dizer o tipo do evento
}
//window.addEventListener(`click`, callba)   //o evento vai ser ao clicar e vai exibir a variavel const

//vamos fazer uma funçao que vai calcular
let numero = (x, y) => x + y           //criamos uma variavel que tem o parametro x, y e que a funçao dele e calcular ao receber os dados

const calculo =(x, y, z) => {                //criamos uma variavel que tem parametro x,y,z que tem a funçao de armazena o x e y
   computa= (x,y)
}
const resultado = calculo(20,30, numero)           //atribuimos os parametro que vai executar a funçao calculo e depois ir pra variavel numero que e soma-los
console.log(resultado)





















