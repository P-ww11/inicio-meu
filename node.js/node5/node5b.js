const express = require("express")
const rotas = require("./node5")          //criamos uma variavel que armazena e pega o modulo que criamos basta chamar o nome da pasta e do arquivo
const porta = 8081                  //aqui ja fazemos a criaçao do servidor
const app = express()

app.use("/",rotas)            //usamos o caminho da rota principal e o modulo que armazenamos  importando ela

app.get("*",(req,res)=>{                  //e se caso for diferente das rotas ele exibira essa mensagem
    res.send("rota padrao")
})
app.listen(porta,()=>{console.log("criado servidor de rotas")})


















