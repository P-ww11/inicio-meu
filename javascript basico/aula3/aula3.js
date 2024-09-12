

// criando prompt para entrada do usuario relacionado ao nosso codigo//
//precisa colocar a variavel para ser lett pois o valor dela mudara  para number//
let numero = prompt('digite um numero: ')
//como nao passamos o numero e sim uma variavel ele vai ser null embora no momento em que o prompt for realizado ele fara a variavel ter number//
numero = Number(numero)
//documento e um DOM, pegar elemento por id e um metodo que seria o document.getElementid//
//passamos a uma variavel pra ela ficar armazenada//
const numeroId = document.getElementById('elemento-numero')
//criando um get elemento pra o outro id//
const textId = document.getElementById('texto')
//aqui falamos que o numeroId que e uma variavel que armazena o span do html fazendo assim nois vai atribuir ao innerHTML o html interno de algo//
//sendo isso um objeto,ou seja, uma tag o innerHTML . assim para alterarmos ou inserimos conteudo//
// aqui falamos que queremos que tudo do prompt passa internamente para o html do numero id ou seja ele vai escrever no html o nosso prompt
numeroId.innerHTML = numero
textId.innerHTML = `<p>seu numero e ${numero} e dividindo seu numero por 2 e: ${numero / 2}`
//o prompt geralmente armazena string para fazer do tipo number basta
// aqui nois limpou o textoID usando html porque a primeira função dele vai ter o valor string vazia
textId.innerHTML = ''
//aqui nois colocou a raiz quadrada o numero evelado(**) a 0.5 //
textId.innerHTML += `<p>raiz quadrada: ${numero ** 0.5}</p>`;
//aqui nois perguntou se o number e NaN e qual numero pra verificar? ai nois colocou o nosso input( variavel numero)
textId.innerHTML += `<p>e NaN: ${Number.isNaN(numero)}</p>`;
//aqui nois colocou se o number e inteiro e passamos o valor de numero pra checar//
textId.innerHTML += `<p>seu ${numero} e inteiro: ${Number.isInteger(numero)}</p>`;
//aqui nois mandou uma função pro math ser floor (o numero subir) ele verifica se o numero tem casas decimais pq caso n tiver ele nem funciona //
textId.innerHTML += `<p>arredondando para cima: ${Math.floor(numero)}</p>`;
//aqui e a mesma coisa so que ceil para abaixo ou seja ele vai arredondar para baixo(isso so funciona se tiver decimal)//
textId.innerHTML += `<p>arredondando para abaix:${Math.ceil(numero)}</p>`;
//aqui nois falou que o numero tem de ser fixo no 2(apenas 2 casas decimais)
textId.innerHTML += `<p>com duas casas decimais: ${numero.tofixed(2)}</p>`;

//tudo isso e um objeto usando $ que deixa escrever no templete string fazendo assim nao alterar globalmente//
//alem do mais o += e para acrescentar se fosse = ele iria simplesmente se sobre por pois esta e um novo valor//












