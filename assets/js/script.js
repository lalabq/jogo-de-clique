// Valores do placar
let pontuacao = 0;
let pontosPorClique = 1;
let qtdeUpgradesComprados = 0;

// Upgrades
const upgrades = {
  1: { custo: 10,  somarAoPontosPorClique: 1  },
  2: { custo: 50,  somarAoPontosPorClique: 8  },
  3: { custo: 100, somarAoPontosPorClique: 32 }
};

// Som ao clicar na moeda
const audioMoeda = new Audio('assets/audio/moeda.mp3');
function tocarSomMoeda() {
  audioMoeda.currentTime = 0.3;
  audioMoeda.play();
}

// Som ao comprar um upgrade
const audioCompra = new Audio('assets/audio/compra.mp3');
function tocarSomCompra() {
  audioCompra.currentTime = 0;
  audioCompra.play();
}

// Exibir moeda flutuante na tela
function exibirMoeda() {

  // Gera um tamanho aleatório para a moeda entre 20 e 80 pixels
  let tamanho = Math.floor(Math.random() * (80 - 20)) + 20;

  // Gera uma posição vertical aleatória para a moeda com base na altura da tela
  let top = Math.floor(Math.random() * window.innerHeight) - tamanho;

  // Gera uma posição horizontal aleatória para a moeda com base na largura da tela
  let left = Math.floor(Math.random() * window.innerWidth) - tamanho;

  // Cria uma div que será a moeda
  let moeda = document.createElement('div');
  moeda.className = 'moeda';
  Object.assign(moeda.style, {
    position: 'absolute',
    height: `${tamanho}px`,
    width: `${tamanho}px`,
    top: `${top}px`,
    left: `${left}px`
  });

  // Põe a moeda no HTML
  document.body.appendChild(moeda);

  // Animação de 1,5 segundo da moeda sendo puxada para cima
  $(moeda).animate({ top: top - 800 }, 1500);

  // Após o 1,5 segundo remove a moeda do HTML
  setTimeout(() => {
    moeda.remove();
  }, 1500);
}

// Funções para atualizar os valores do placar na tela
const atualizarPlacar = {
  pontuacao:             () => document.getElementById('pontos').innerHTML                  = pontuacao,
  valorPorClique:        () => document.getElementById('pontos-por-clique').innerHTML       = pontosPorClique,
  qtdeUpgradesComprados: () => document.getElementById('qtde-upgrades-comprados').innerHTML = qtdeUpgradesComprados
};

// Função executada ao clicar na moeda
document.getElementById('clique').addEventListener('click', function() {
  pontuacao += pontosPorClique;
  atualizarPlacar.pontuacao();
  tocarSomMoeda();
  exibirMoeda();

  // Exibe mensagem que o jogo acabou
  if (pontuacao >= 500) {
    document.querySelector(".fim-de-jogo").style.display = "flex";
    document.querySelector(".botao-moeda").style.display = "none";
  }
});

function comprarUpgrade(numeroDoUpgrade) {
  const { custo, somarAoPontosPorClique } = upgrades[numeroDoUpgrade];

  if (pontuacao >= custo) {
    pontuacao -= custo;
    pontosPorClique += somarAoPontosPorClique;
    qtdeUpgradesComprados += 1;
    atualizarPlacar.pontuacao();
    atualizarPlacar.valorPorClique();
    atualizarPlacar.qtdeUpgradesComprados();
    tocarSomCompra();
  } else {
    alert('Você não possui pontos suficientes para comprar este upgrade :(');
  }
}