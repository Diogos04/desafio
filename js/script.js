const botaoNao = document.getElementById('nao');

botaoNao.addEventListener('mouseover', () => {
    const larguraJanela = window.innerWidth - botaoNao.offsetWidth;
    const alturaJanela = window.innerHeight - botaoNao.offsetHeight;

    const novaPosicaoX = Math.random() * larguraJanela;
    const novaPosicaoY = Math.random() * alturaJanela;

    botaoNao.style.left = novaPosicaoX + "px";
    botaoNao.style.top = novaPosicaoY + "px";
});

function resposta() {
    document.body.innerHTML = '<h1>Eu sabia que você ia aceitar.</h1><p>Agora somos um casal oficialmente.</p><p>Já se prepare para o casório...</p>';
}