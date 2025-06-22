//Variaveis dos valores iniciais
let valorClique = 1;
let pontuacao = 0;
let comprados = 0;

//Declara função de pontuar clique
function pontuarClique() {
  //mostrar no console nossas variaveis
  console.log('inicio: ' + pontuacao);
  console.log('valorClique: ' + valorClique);
  pontuacao = pontuacao + valorClique;
  console.log('fim: ' + pontuacao);
  atualizarElementoPontos(pontuacao);
  tocarSomMoeda();
  adicionarMoedaNaTela();
  // Exibe mensagem que o jogo acabou
  if (pontuacao >= 500) {
    document.querySelector(".fim-de-jogo").style.display = "flex";
    document.querySelector(".botao-moeda").style.display = "none";
  }
}

//Atualiza os pontos na tela do usuario
function atualizarElementoPontos(valor) {
  let elementoPonto = document.getElementById('pontos');
  elementoPonto.innerHTML = valor;
}

//Atualiza os elementos comprados na tela do usuario
function atualizarElementoComprados(valor) {
  let elementoPonto = document.getElementById('qtde-upgrades-comprados');
  elementoPonto.innerHTML = valor;
}

//escuta o clique
document.getElementById('clique').addEventListener('click', pontuarClique);

//Atualiza os pontos na tela do usuario
function atualizarElementoValorClique(valor) {
  let elementoPonto = document.getElementById('pontos-por-clique');
  elementoPonto.innerHTML = valor;
}

//Aumenta o valor do clique
function aumentarValorClique(soma) {
  valorClique = soma + valorClique;
  atualizarElementoValorClique(valorClique);
}

//Comprar Upgrades
function comprarUpgrade(fase) {
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
    //verifica se o usuario possui dinheiro suficiente
    if (pontuacao >= custo) {
      aumentarValorClique(upgrade);
      pontuacao = pontuacao - custo;
      comprados = 1 + comprados;
      atualizarElementoComprados(comprados);
      atualizarElementoPontos(pontuacao);
      tocarSomCompra();
    } else {
      alert('Você não possui pontos suficientes para comprar este upgrade :(');
    }
  }
}

//cria uma constante com uma nova classe de audio
//o parametro de inicialização dessa classe é url do arquivo de audio
const audio = new Audio('assets/audio/moeda.mp3');
function tocarSomMoeda() {
  //define o tempo de inicio do audio
  audio.currentTime = 0.3;
  audio.play();
}


const audioCompra = new Audio('assets/audio/compra.mp3');
function tocarSomCompra() {
  audioCompra.currentTime = 0;
  audioCompra.play();
}

//Declara a função adicionar moeda na tela 
function adicionarMoedaNaTela() {
  let tamanhoMoeda = Math.floor(Math.random() * (80 - 20)) + 20;
  let elementoMoeda = document.createElement("div");
  elementoMoeda.classList = ['moeda'];
  elementoMoeda.style.height = tamanhoMoeda + 'px';
  elementoMoeda.style.width = tamanhoMoeda + 'px';
  elementoMoeda.style.position = 'fixed';

  let larguraTela = window.innerWidth;
  let alturaTela = window.innerHeight;
  let top = Math.floor(Math.random() * (alturaTela - 0)) + 0;
  let left = Math.floor(Math.random() * (larguraTela - 0)) + 0;
  elementoMoeda.style.top = top + 'px';
  elementoMoeda.style.left = left + 'px';
  document.body.appendChild(elementoMoeda);

  $(elementoMoeda).animate({ top: top - 800 }, 1500);

  setTimeout(() => {
    elementoMoeda.remove();
  }, 1500);
}