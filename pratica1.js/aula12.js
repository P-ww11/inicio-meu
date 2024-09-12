//async/ await sao um jeito facil de escrever promise
//exemplo
//a palavra Promise deve começar de letra maiuscula
const promessa = new Promise(function (resolve, reject){       //criei uma variavel que tem valor promise que armazena dentro uma funçao de resolver e rejeitar e ela retorna o rejeitar
    return reject("error")
})
async function start(){                                            //pra usar async/await precisa colocar a funçao dentro dela 
    try{                                                    //cplocamos o nome start e vai tentar fazer esperar uma promessa e se der erro ele ira capturar e exibir o erro
        const resultad = await promessa
    } catch (erro){
        console.log(erro) 
    }
}
start()




 




