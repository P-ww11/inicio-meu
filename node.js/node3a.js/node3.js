//nois vai utlizar o modulo fs para manipular arquivos
//node vai fazer a leitura e o retorno desse nosso html
const http = require(`http`)
const fs = require(`fs`)
const porta = process.env.PORT 

const server =http.createServer((req,res)=>{
  fs.readFile("arquivo.html",(err,arquivo)=> {    //readflie()para ler o arquivo &&  fs.appendFile(`arquivo.html`)   appendfile e anexar arquivo e o ()<=(nome do arquivo)
     res.writeHead(200,{"Content-Type":`text/html`})   //escrever no cabeçalho o status do servidor o tipo de texto que vai ser html
    res.write(arquivo)                           
    return res.end()
  })
})

server.listen(porta || 8081,()=>{
    console.log("abrindo servidor")
})
//quando atualiza o html nao precisa fechar os ervidor e abrir pois a configuraçao do servidor(esse arquivo)nao foi alterada












