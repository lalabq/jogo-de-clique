let valorClique = 1;
let pontuacao = 0;

function pontuarClique() {
    console.log('inicio: ' + pontuacao);
    console.log('valorClique: ' + valorClique);
    pontuacao = pontuacao + valorClique;
    console.log('fim: ' + pontuacao);
    atualizarPontos(pontuacao);
}

function atualizarPontos(valor){
    let elementoPonto = document.getElementById('pontos');
    elementoPonto.innerHTML = valor;
}

