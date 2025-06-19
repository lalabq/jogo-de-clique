let valorClique = 1;
let pontuacao = 0;
let comprados = 0;

function pontuarClique() {
    console.log('inicio: ' + pontuacao);
    console.log('valorClique: ' + valorClique);
    pontuacao = pontuacao + valorClique;
    console.log('fim: ' + pontuacao);
    atualizarElementoPontos(pontuacao);
    tocarSomMoeda();
}

function atualizarElementoPontos(valor) {
    let elementoPonto = document.getElementById('pontos');
    elementoPonto.innerHTML = valor;
}

function atualizarElementoComprados(valor) {
    let elementoPonto = document.getElementById('comprados');
    elementoPonto.innerHTML = valor;
}

document.getElementById('clique').addEventListener('click', pontuarClique);

function atualizarElementoValorClique(valor) {
    let elementoPonto = document.getElementById('ValorClique');
    elementoPonto.innerHTML = valor;
}

function aumentarValorClique(soma) {
    valorClique = soma + valorClique;
    atualizarElementoValorClique(valorClique);
}

function comprarValorClique(fase) {
    let custo;
    let upgrade;
    if (fase == 1) {
        custo = 10;
        upgrade = 1;
    } else if (fase == 2) {
        custo = 50;
        upgrade = 8;
    } else if (fase == 3) {
        custo = 100;
        upgrade = 32;
    } else {
        alert('NÃO EXISTE ESSA FASE');
    }
    if (custo) {
        if (pontuacao >= custo) {
            aumentarValorClique(upgrade);
            pontuacao = pontuacao - custo;
            comprados = 1 + comprados;
            atualizarElementoComprados(comprados);
            atualizarElementoPontos(pontuacao);
            tocarSomCompra();
        } else {
            alert('POBRE!!!');
        }
    }
}


let audio = new Audio('assets/audio/moeda.mp3');
function tocarSomMoeda() {
    audio.currentTime = 0.3;
    audio.play();
}


let audioCompra = new Audio('assets/audio/compra.mp3');
function tocarSomCompra() {
    audioCompra.currentTime = 0;
    audioCompra.play();
}

