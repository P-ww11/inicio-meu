//herança e algo que possa ser herdado em classe seria um filho herdado caracteristicas do pai
class dev {
 constructor(nome, idade, principalLinguagem){           //criamos uma classe que tem os parametro no construtor nome,idade e lingua e depois chamamos this no escopo local de onde foi chamado 
    this.nome = nome        
    this.idade = idade
    this.principalLinguagem = principalLinguagem
    
}
apresenta(){                                   //aqui criamos uma funçao que ao ser chamada tem o retorno de uma apresentaçao
    console.log(`oi eu sou o dev front,eu trabalho com ${this.principalLinguagem} e me chamo ${this.nome}`)

}
}
//const de = new dev("pedro", 24, "javaScript")            //aqui criamos um new dev pois para atribuir ao parametro no construtor 
//console.log(de)                             //aqui mostramo os dado do usuario que guardamos na variavel de
//de.apresenta()                           //aqui chamamos a mesma variavel de para mostrar a funçao apresenta nao precisando de consolelog pois e uma declaraçao        

//agora pra herdar uma classe de outra

class frontend extends dev {            //extends quer dizer pegar a nossa classe e herdar de uma prncipal ou de outra
    constructor(nome, idade, principalLinguagem, frameworks){   //aqui criamos parametros diferente para classe front e back   
      super()
       this.nome = nome        
       this.idade = idade
       this.principalLinguagem = principalLinguagem
       this.frameworks = frameworks
       
   }
   apresenta(){                                  
       console.log(`oi eu sou o dev front,eu trabalho com ${this.principalLinguagem} e me chamo ${this.nome} e eu uso ${this.frameworks}`)
   
   }
   }
   //criaremos uma agora back end
   class backend extends dev {      //as duas sao classe filhas de dev      
    constructor(nome, idade, principalLinguagem,bancoDados){   
        super()        
       this.nome = nome        
       this.idade = idade
       this.principalLinguagem = principalLinguagem
       this.bancoDados = bancoDados
       
   }
   apresenta(){                                  
       console.log(`oi eu sou o dev back,eu trabalho com ${this.principalLinguagem} e me chamo ${this.nome} e eu uso ${this.bancoDados}`)
   }
   }
   const frontend1 = new frontend("jorel", 20, "node.js", "react")
   const backend1 = new backend("cardoso", 10, "php", "express")

   console.log(frontend1)
   frontend1.apresenta()
   console.log(backend1)
   backend1.apresenta()
   //desse jeito o codigo vai dar erro pois nao estamos chamando o super pra pegar referencias ao construtor da classe pai




 //para otimizar o trabalho o this que fazemos podemos melhorar pois a classe pai ja esta fazendo o this.nome this.etc.... ai para pegar isso da classe pai basta
 //basta passar pro construtor no super(nome, idade, principalInguagem) esses sao dados que se encontra tanto na classe herdada como na principal e esse metodo de colocalos no super e pra melhorar o codigo
 //ele vai ter o mesmo retorno










