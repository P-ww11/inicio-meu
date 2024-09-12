function meuEscopo() {
    const pessoas = [];
    
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
   
    function eventodeFuncao(event) {
        event.preventDefault(); // Impede o envio do formulário e o recarregamento da página

        // Captura dos valores dos inputs
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        
        // Adiciona os dados ao array de pessoas
        pessoas.push({ nome, sobrenome, peso, altura });
        
        // Exibe os dados no console
        console.log(pessoas);

        // Mostra o resultado na página
        resultado.innerHTML += `<p>Seu nome é ${nome}, seu sobrenome é ${sobrenome}, seu peso é ${peso} e sua altura é ${altura}</p>`;
    }

    // Registra o evento de submit no formulário
    form.addEventListener('submit', eventodeFuncao);
}

// Chama a função
meuEscopo();
