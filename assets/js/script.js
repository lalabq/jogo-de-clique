let valorClique = 1;
let pontuacao = 0;
let comprados = 0;

function pontuarClique() {
    pontuacao = pontuacao + valorClique;
    atualizarElementoPontos(pontuacao);
    tocarSomMoeda();
    adicionarMoedaNaTela();
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
    let elementoPonto = document.getElementById('valor-por-clique');
    elementoPonto.innerHTML = valor;
}

function aumentarValorClique(soma) {
    valorClique = soma + valorClique;
    atualizarElementoValorClique(valorClique);
}

function comprarValorClique(fase) {
    let custo;
    let upgrade;

    switch (fase) {
        case 1:
            custo = 10;
            upgrade = 1;
            break;
        case 2:
            custo = 50;
            upgrade = 8;
            break;
        case 3:
            custo = 100;
            upgrade = 32;
            break;
        default:
            alert('NÃO EXISTE ESSA FASE');
            break;
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

function adicionarMoedaNaTela(){
    let tamanhoMoeda = Math.floor(Math.random() * (80 - 20) ) + 20;
    let elementoMoeda = document.createElement("div");
    elementoMoeda.classList = ['moeda'];
    elementoMoeda.style.height = tamanhoMoeda + 'px';
    elementoMoeda.style.width = tamanhoMoeda + 'px';
    elementoMoeda.style.position = 'absolute';

    let larguraTela = window.innerWidth;
    let alturaTela = window.innerHeight;
    let top = Math.floor(Math.random() * (alturaTela - 0) ) + 0;
    let left = Math.floor(Math.random() * (larguraTela - 0) ) + 0;
    elementoMoeda.style.top = top + 'px';
    elementoMoeda.style.left = left + 'px';
    document.body.appendChild(elementoMoeda);

    $(elementoMoeda).animate({top: top - 800}, 1500);

    setTimeout(()=>{
        elementoMoeda.remove(); 
    }, 1500);
}