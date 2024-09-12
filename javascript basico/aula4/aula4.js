function meuEscopo(){
    
  
  
    const pessoas = []
    
    
      //nois usa templete string pois sem templete(nao teria como pois ai seria global ou uma variavel) com templete(ele procuraria o seletor que tenha essa string e o . e pra identificar qual id)
      const form = document.querySelector(`.form`)    // nois esta usando o queryselector para pegar elementos ou identifacodres e o . para class e # para id//
     //colocamos um evento no form de onsubmite que ao enviar vai acontecer uma função que tem alert nela ou seja ao clicar ele enviara a alert 
     //criamos uma div que vai armazena o resultados do nosso formulario
     const resultado = document.querySelector(`.resultado`)
     //let contador = 1
      function eventodeFuncao(event){
          //criamos uma função que vai previnir o padrão do comportamento do site que e atualizar sempre que enviar
          //e exibiremos no console do site que nao foi enviado (atualizado os dados) e sempre que clicar ele vai aumentar o contador com o contador++ igual loop
          //aqui fizemos a requisição dos elementos para variavel (pegamos o form que e nosso formularios e pegamos as classe ou id dentro desse form) sempre usando . para saber que queremos class
          event.preventDefault() 
          //caputuramos cada classe usando a variavel form que e um document e assim armazenamos ela em suas devidas variaveis
          //nao podemos simplesmente chegar e passar querryselector sem ter um document doque nois quer entao basicamente a const form serve como pai e selecionamos os filho desse pai
          const nome = form.querySelector(`.nome`);
          const sobrenome = form.querySelector(`.sobrenome`);
          const peso = form.querySelector(`.peso`);
          const altura = form.querySelector(`.altura`);
        // console.log(`formulario nao foi enviado ${contador}`)
         // contador++
          //pegamos o valor de cada variavel que esteja no input
          //value e com v minusculo e alem do mais nois pegou a variavel que tem array e colocamos(push) inserimos o nosso objeto que vai armaneza e separar items com a virgula ,
    pessoas.push({   nome: nome.value, sobrenome: sobrenome.value,  peso: peso.value,  altura: altura.value  })
    console.log(pessoas)
    //falamos que o resultado(nossa div) vai escrever internamente no html e vai acrecentar sempre que o submit for escutado como evento ele vai gerar o nosso paragrafo com dados que o input nos informar
    resultado.innerHTML +=`<p>seu nome e ${nome.value} e seu sobrenome e ${sobrenome.value} seu peso e ${peso.value} altura ${altura.value}</p>`
} 
//aqui passamos que o formulario vai ter a função de previnir o padrão e exibir no console e os evento que vai escutar o formulario sera o de submit e de eventodeFunção
form.addEventListener(`submit`, eventodeFuncao)
}
      //passamos 
          //que no caso o submite vai escutar essa função que vai seer executada ao clicar no submit
          
      //declarando uma funçao chamando ela pois o servidor precisa entender que quero usar a função //
      meuEscopo()