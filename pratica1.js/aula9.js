//vamos criar uma promises
//const umapromessa = new promises() //isso e uma funçao construtora de promises que usa new um novo obeto promises, sendo um valor da variavel umapromessa
//uma funçao construtora constroi um objeto, entao promises e um objeto que e construido utilizando essa funçao construtora de promises
//o objeto vai efetuar uma eventual conclusao ou falha de uma operaçao  e tmb pode ter ou ter concluido ou ter tido uma falha ou estar pendente
//peding,  fulfilled ou resolved, rejected
const umaprom = new promises((resolve, reject) =>{
    let soma = 1+ 3
    if(soma === 2){
             resolve("tudo certo")     //nao necessaria mente precisa desses parametro pode ter somente o resolve mas caso o numero nao for igual a 2 ele ficara pendente pra sempre
    }
    else {
        reject ("deu ruim") 
    }
})
umaprom.then((resultado)=>{            //nois temos um objeto que e a umaprom e nois podemos encadear nela chamada de metodos
    console.log(`valor do then e ${resultado}`)  //o then e como se a promisse fosse resolvida se la em cima der resolve ele executara essa funçao then
}).catch((erro)=>{
    console.log(`valor do catch ${erro}`)// se deu reject ali na promises ele executara catch de nao concluida
}).finally(()=>{
    console.log("eu te amo bolsonaro") //se der qualquer um dos dois ele finalizara com finally(sempre sera executado)idependente do resultado
}) 
//existe um evento loop que ao terminar um evento por completo ele volta la no começo para fazer denovo
//o evento loop deixa a chamada de metodos then, catch e finally por ultimo no codigo ou seja se eu colocar um console.log ele executara primeiro e depois ira fazer o encadeamento then

console.log("antes da promisse resultado")

