//agora usaremos o apprend no outro usamos read entao podemos pegar a estrutura do anterior
const http = require(`http`)
const fs = require(`fs`)
const porta = process.env.PORT 

const server =http.createServer((req,res)=>{
  fs.appendFile("arquivob.html","manipulando arquivos so que com append",(err)=> {    //se der erro essa arrow function aparece
    if(err)throw error                           //
    else                                      //se houver erro ele vai disparar com a mensagem erro
    console.log("arquivo criado")
    res.end()
  })
})

server.listen(porta || 8081,()=>{
    console.log("abrindo servidor")
})
//se a  pasta na qual o appendfile nao existir ele cria um arquivo com o nome que passamos
//o manipulando arquivos... e o conteudo que passamos ao indicar o arquivo ou seja indicar e arquivob.html e o conteudo e o manipulando arquivos...........