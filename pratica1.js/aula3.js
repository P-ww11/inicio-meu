//aprenderemos sobre estruturas condicionais for of de loop
const ola = "oi"
const listadeEtados = [`Oi ${ola}`] // para usar o templete ${} basta utilizar o cifrao `
// kk vamo aprender agora as estruturas de verdade
const listaEstado = ["sp","rj","sc","mg"]

for(let estado of listaEstado){                     //da pra nois declarar uma variavel dentro
    console.log(estado + " e um estado brasileiro") //for(para) of(de)    entao para cada variavel estado estara contatenando com o listaestado
}                                                  //ele mostrara o estado e contatenara depois com a string e um estado tudo isso se tornando um laço de repetiçao
//da pra fazer em outros tipos primitivos
const strig = "ola papai"

for(let repetir of strig){
    console.log (repetir)
}











