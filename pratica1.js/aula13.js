//promise, como utilizar? saiba que em portugues e promessa ou seja ele tem 4 jeitos
//ficar em pendencia, aceitar, rejeitar, finally
//pendencia ele ficara pendente e como pedir o uber e nao saber se ele chegara ou recusara
//aceitar e caso o uber aceite o pedido, o rejeitar e caso o uber cancela e o finally e idependente de aceita ou rejeita ele executara
//essa e a sintaxe da promise
// new Promise((resolve, reject)=>{})
    let aceitar = false               //aqui podemos manipular o resolve e reject pois por ser boleano ele se encaixa em aceitar e negar
    console.log("pedindo uber")         
const promessa = new Promise((resolve, reject)=>{      //criamos uma promessa com parametro aceitar e rejeitar 
    if(aceitar){                                          //se o parametro(variavel) for false ele nao executara esse bloco pois esse codigo e true de acontecer,aceitar
        return resolve("pedido aceito")                 //aqui ele retornaria caso o resultado fosse verdadeiro
    }else                                                  //se o if nao for o else executara imediatamente e retornara o reject sendo falso
    return reject("pedido negado")
    
})
console.log("aguardando")


promessa                                      //aqui para promise executar ela precisa chegar aqui ou then ou catch
.then(resulta => console.log(resulta))         //then e caso for verdadeira ou seja a promessa fosse verdadeira ele mostraria a promessa como sendo verdadeira e executaria         
.catch(erro => console.log(erro))           //catch ele vai pegar o erro entao e tudo em uma funçao que exibi a si mesmo



