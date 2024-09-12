const form = document.querySelector('#formulario');   //O método document.querySelector()  seleciona o primeiro elemento que corresponde ao seletor CSS especificado.//

form.addEventListener('submit', function(evento) { //nois vai querer adcionar um evento e ve-lo do form, o evento sera o submit 
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso')   //aqui nois esta falando o parametro evento e definir como alvo queryselector(selecionar elemento html)e o alvo sera o id peso que e um input
    const inputAltura = evento.target.querySelector('#altura') //armazena no evento a propriedade target que esta disparando diretamente pro form e selecionar o elemento html que sera o id que colocamos

    const peso = Number(inputPeso.value)    //nois esta pegando o valor do input que vai ser numero e passando pra variavel peso e altura
    const altura = Number(inputAltura.value) //evento.target: Refere-se ao elemento que disparou o evento, no seu caso, o formulário (<form>).//

  if(!peso){
    myresult("peso invalido", false) //aqui verificamos que se o peso nao for igual o value de number do input entao ele colocara no myresult os argumento de peso invalido e falso
    return;
  }
  if(!altura){
    myresult("altura invalida", false) //aqui e a mesma coisa pra altura se for diferente valor do inputaltura ele exibira invalido, false como argumentos
    return;            //precisa do return para a função if terminar ali se a condição for cumprida
}
    const imc  = getImc(peso,altura) //essa função nao existe e nois esta criando função no imc e depois declarar ela
    const nivelimc = getNivelImc(imc) //aqui eu peguei a minha função junto com o imc e atribui a uma variavel  para que quando esse evento começar ele ir buscar aquele array e saber que o imc esta nele
   
    console.log(imc , nivelimc) 
  
  
   //console.log("Evento prevenido");    o código está configurando um manipulador de eventos para o envio do formulário. Quando o formulário é enviado pelo evento submit, a função evita que o formulário seja enviado realmente (graças ao preventDefault()) e, em vez disso, apenas exibe uma mensagem no console.
    // myresult("ola mundo")//
});
function getNivelImc(imc){    //criamos um objeto que nele tem um array com indices que sempre começa por 0 depois 1.... nois usamos array pra identificar os niveis de peso e somar o quanto vai ser seu imc no input
    const nivel= [
        'abaixo do peso',
        'peso normal',
        'sobre-peso',
        'obesidade grau 1',
        'obesidade grau 2',
        'obesidade grau 3',
    ]
    if(imc >= 39.90)  return nivel[5];
    if( imc >=35) return nivel[4];
    if( imc<=34)  return nivel[3];
    if( imc<=25)  return nivel[2];
    if(imc <=18,5)   return nivel[1];
    if(imc<= 18,4)   return nivel[0];
}


function getImc (peso,altura ){      //aqui declaramos uma função getimc que colocamos evento e depois chama-lo e passar argumento para ela pois no evento ela e um parametro
    const imc = peso / altura **2      //dentro dessa função getImc passamos a uma constante imc(variavel) com o escopo local apenas nessa função o peso dividido pela altura e elevado(**) a 2
    return imc.toFixed(2)        //a propriedade toFixed e para casas decimais fixo nao passando(colocamos 2 casa decimais)
}




//O método document.querySelector()  seleciona o primeiro elemento que corresponde ao seletor CSS especificado.//
function myresult(mensagem, invalid){    //criamos dois parametros para verificar se o peso e verdadeiro ou falso 
    const resultado1 = document.querySelector('#resultado')  //selecionamos o elemento com id e adcionamos o resultado nessa variavel resultado1
    resultado1.innerHTML = mensagem     //permite que você obtenha ou defina o conteúdo HTML dentro de um elemento.ele retorna o HTML dentro do elemento. Por exemplo, se você tiver um <div> com alguns elementos HTML, innerHTML retornará uma string com esse HTML.// 
   
    //criando elemento usando javascript e inserindo na div
    const resultado2 = document.querySelector('#resultado2')
    resultado2.innerHTML = "" 
    const p = document.createElement('h1')    //aqui nois vai criar um elemnto para o documento que va estar armazenado no p e o () seria a tag do elemento do html
    p.classList.add('adcionando-classe') //adcionando uma classe em javascript so que e no p que ja tem elemento que e h1
    p.innerHTML = 'qualquer babozeira'    //definimos que o P vai obter conteudo html dentro dele e o valor e "qualuqer babozeira"
    resultado2.appendChild(p)    //aqui nois fizemos que o appendchild(inserir filho ou elemento) o p vai ser inserido no resultado2

}










