// Definimos um array chamado 'elemento' contendo objetos.
// Cada objeto tem uma 'tag' (representando o nome da tag HTML) e um 'texto' (conteúdo que será inserido na tag).
/*const elementos = [
    { tag: 'p', texto: 'f-1 algum texto doido que escrevi' },
    { tag: 'div', texto: 'f-2 algum texto doido que escrevi' },
    { tag: 'section', texto: 'f-3 algum texto doido que escrevi' },
    { tag: 'footer', texto: 'f-4 algum texto doido que escrevi' }
];

// Seleciona o elemento no HTML que tem a classe '.container'
const container = document.querySelector('.container');

// criando um elemento div do documento que esta armazenado na variavel criandoDiv
const criandoDiv = document.createElement('div');

// Inicia um loop que percorre o array 'elementos' que se for menor que o tamanho do elemento ele vai acrecentar(ficar aumentando o i++ ate ser maior que o tamanho do elemento)
for (let i = 0; i < elementos.length; i++) {
    
    // Desestruturação do objeto atual. Pegamos a 'tag' e o 'texto' de cada item no array
    //pegamos o objeto que esta no elementos e atribuimos a o tamanho do elemento ou seja ate termina o loop o tag e texto tmb vai colocar todos os objeto do array
    let { tag, texto } = elementos[i];
    
    // Cria um elemento HTML usando o nome da tag fornecida (p, div, section, footer). pu seja nois procurou no objeto a tag e criamos um elemento de cada que seria p,div,section,footer
    let tagCriada = document.createElement(tag);
    
    // Insere o texto no interior da tag criada usando 'innerHTML'ele vai colocar internamente o texto no documento do elemento tag
    tagCriada.innerHTML = texto;
    
    // Adiciona o novo elemento criado dentro da 'div' que criamos anteriormente.
    //no criandoDiv adcionamos um filho que seria a tagcriada ou seja no elemento que criamos(div) usando js nois colocamos um filho nele que seria a tagcrida
    criandoDiv.appendChild(tagCriada);
}

// Após o loop, adicionamos a 'div' (que agora contém todos os novos elementos) dentro do container principal da página.
//e entao adcionamos um elemento filho(criandoDiv) no pai que seria o container
container.appendChild(criandoDiv);

// Agora, o container tem todos os elementos (p, div, section, footer) inseridos dinamicamente.*/





//outro jeito de fazer
//criar uma função vazia
(function (){
    //criar um array armazenado no elementos
    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'}
    ]; //chamar o container(nossa class no section) e selecionar a class ao documento (DOM)que estara amarzenado na variavel container
    const container = document.querySelector('.container');
    //criar uma variavel vazia pra depois colocar valor nela
    let tagHtml = '';
 //um laço de repetição que pega o tamanho e se for menor o i cresce
    for (let i = 0; i < elementos.length; i++){
         //desestruturando o 'elementos' e pegando de acordo com o elemento ate ser igual a i e o i ate ser maior que o tamanho do array
         //ou seja ele vai criar tags e textos ate o elemento ser do tamanho do i
         let {tag, texto} = elementos[i];
         //acrescentando a tag que seria o p,div,footer e criando a tag em html e os texto dessas tag que formaria um elemento de acordo com cada tag e texto
         //mas nesse caso seria de acordo com o array pois esta dentro do loop e o elemento vai parar de rodar o loop ate o i ser maior que o tamanho do elemento
         tagHtml += `<${tag}>${texto}</${tag}>`;
 
     }//aqui nois colocou no container(class da section) que nois vai escrever internamente e acrescentar cada div de acordo com a tagHTML criada no loop
     //ou seja vai gerar 4 tagHTML e cada uma vai conter objeto diferente
     //isso so e possivel pois a taghtml ta acrecentando e guardando no processador pra ser utilizado
     //o container tmb esta acrescentando cada elemento no interno do html e colocando la no site
    container.innerHTML += `<div>${tagHtml}</div>`;
 
}) ()
