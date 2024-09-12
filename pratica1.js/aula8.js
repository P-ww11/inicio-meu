//herança sem classes   pegando a estrutura que fizemos na aula6.js e vamo converte a herança sem utilizar classe
const dev = function(nome, idade, principalLinguagem){
          
       this.nome = nome         
       this.idade = idade
       this.principalLinguagem = principalLinguagem
       
 this.apresenta =function(){                                    
       console.log(`oi eu sou o dev front,eu trabalho com ${this.principalLinguagem} e me chamo ${this.nome}`)
   
   }// a herança principal ja esta construido agora so falta atribuir para os filhos
   }
   
   const frontend = function(nome, idade, principalLinguagem, frameworks){      //criamos uma funçao que vai receber nome idade etc..    
    const newDev = new dev(nome, idade, principalLinguagem)           //aqui criamos uma variavel que vai herda coisas do principal
      newDev.frameworks = frameworks                  //essa newdev que criamos vamos criar um parametro chamado framework
      Object.setPrototypeOf(this,newDev)  //o assign o primeiro objeto e atribui ao segundo que e newDev ele pega os dois e junta
      }                                    //se o assign nao for colocaremos setprototype
    this.apresenta =function(){                                  
          console.log(`oi eu sou o dev front,eu trabalho com ${this.principalLinguagem} e me chamo ${this.nome} e eu uso ${this.frameworks}`)
      
      }
    
      //criaremos uma agora back end
      const backend = function(nome, idade, principalLinguagem,bancoDados){       
        newDev = new dev(nome, idade, principalLinguagem)   
        newDev.bancoDados = bancoDados
          Object.setPrototypeOf(this,newDev)
      }
    this.apresenta = function(){                                  
          console.log(`oi eu sou o dev back,eu trabalho com ${this.principalLinguagem} e me chamo ${this.nome} e eu uso ${this.bancoDados}`)
      }
    
      const frontend1 = new frontend("jorel", 20, "node.js", "react")
      const backend1 = new backend("cardoso", 10, "php", "express")
   
      console.log(frontend1)
      frontend1.apresenta()
      console.log(backend1)
      backend1.apresenta() 
      //ese codigo talves nao funcione entao vai para aula8.1.js pra entender o porque