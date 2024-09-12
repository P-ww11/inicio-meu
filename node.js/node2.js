//aprenderemos a criar rota so usando node e o uso de frameworks
const http = require(`http`)
const porta = 8081
const host = `127.0.0.1`   //esse numero e para acessar o localhost se nao quiser colocar o nome la tem o numero

const servidor = http.createServer((req,res)=>{            //aqui na requisiçao vai vir o conteudo da url e eu vou emitir uma resposta pra ela
          res.writeHead(200,{
            'content-type':`text/html` })          //o texto pode ser simples(plain)  ou html ai vai de sua escolha pode ser muito outras
            
    if(req.url == '/'){                        //usamos if para intercepitar as rotas e verificar a nossa requisiçao url para ter certeza que e igual a rota quando digitamos
      res.write('<h1>seja muito louco pra entender</h1>')                          //nois vai dar uma resposta e por ser texto em html nois usaremos html entao
    }else if(req.url == '/pe'){
        res.write('<p>voce acessou essa pagina mas acontece</p>')          //esse conceito de if e else if melhora muito o codigo pois se a condiçao nao for comprida ele passa pro proxima rota
    }else if(req.url == '/pe/pedro'){                                            //se a rota for acessada ele exibi como resposta nosso texto html
        res.write('<h2>nao termina de escrever</h2>')
    }
    res.end() 
})                                                                 //ao usar createserver precisa passar os parms como arrow function
servidor.listen(porta,host,()=>{console.log("servidor rodando")})                                //tem 3 parametros dentro da listen a porta,localhost, e backlog que vai ser chamada quando o servidor estiver ativo
//funçao de arrow func o backlog
//as rotas podem ser diferentes usando /pe/pedro/.... assim vai indo















