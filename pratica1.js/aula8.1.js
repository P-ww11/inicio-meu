// Definindo a função construtora dev
const dev = function(nome, idade, principalLinguagem) {
    this.nome = nome;
    this.idade = idade;
    this.principalLinguagem = principalLinguagem;
    
    this.apresenta = function() {
        console.log(`Oi, eu sou o dev, eu trabalho com ${this.principalLinguagem} e me chamo ${this.nome}`);
    };
};

// Definindo a função construtora frontend
const frontend = function(nome, idade, principalLinguagem, frameworks) {
    dev.call(this, nome, idade, principalLinguagem); // Chamando o construtor dev para herdar as propriedades
    this.frameworks = frameworks;
};

// Definindo o método apresenta específico para frontend
frontend.prototype.apresenta = function() {
    console.log(`Oi, eu sou o dev front, eu trabalho com ${this.principalLinguagem}, me chamo ${this.nome} e eu uso ${this.frameworks}`);
};

// Definindo a função construtora backend
const backend = function(nome, idade, principalLinguagem, bancoDados) {
    dev.call(this, nome, idade, principalLinguagem); // Chamando o construtor dev para herdar as propriedades
    this.bancoDados = bancoDados;
};

// Definindo o método apresenta específico para backend
backend.prototype.apresenta = function() {
    console.log(`Oi, eu sou o dev back, eu trabalho com ${this.principalLinguagem}, me chamo ${this.nome} e eu uso ${this.bancoDados}`);
};

// Criando instâncias de frontend e backend
const frontend1 = new frontend("Jorel", 20, "Node.js", "React");
const backend1 = new backend("Cardoso", 10, "PHP", "MySQL");

// Chamando os métodos apresenta
console.log(frontend1);
frontend1.apresenta();
console.log(backend1);
backend1.apresenta();



//### Explicações das correções:

//1. **Herança de Propriedades**: Usei `//dev.call(this, nome, idade, principalLinguagem)` nas funções construtoras `frontend` e `backend` para chamar o construtor do `dev` e herdar suas propriedades. Isso garante que os objetos `frontend` e `backend` tenham as propriedades `nome`, `idade`, e `principalLinguagem`.

//2. **Métodos no Protótipo**: Mudei a definição dos métodos `apresenta` para o protótipo de `frontend` e `backend`. Isso é importante para garantir que cada instância compartilhe o mesmo método, em vez de definir o método em cada instância separadamente.

//3. **Correção de Parâmetros**: No seu código original, o parâmetro `bancoDados` na criação da instância `backend1` não correspondia ao que estava sendo usado. Corrigi para que ele corresponda ao banco de dados esperado.

//4. **Correção dos Nomes**: Certifiquei-me de que as variáveis e funções estivessem corretamente formatadas e utilizassem a convenção de nomenclatura padrão do JavaScript.

//Agora, o código deve funcionar corretamente, criando e exibindo as informações para desenvolvedores frontend e backend.

