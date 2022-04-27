const titulo = document.querySelector('.titulo');
const play = document.querySelector('.play');


function atualizarJogo() {
  const titulo = document.querySelector('.titulo');
  const dado1 = document.querySelector('.dado1');
  const dado2 = document.querySelector('.dado2');

  let dadoSorteado1 = Math.floor(Math.random() * 6 + 1);
  let dadoSorteado2 = Math.floor(Math.random() * 6 + 1);
  let caminhoDado = './assets/images/dice' + dadoSorteado1 + '.png';
  let caminhoDado2 = './assets/images/dice' + dadoSorteado2 + '.png';
  dado1.setAttribute('src', caminhoDado);
  dado2.setAttribute('src', caminhoDado2);

  if (dadoSorteado1 > dadoSorteado2) {
    titulo.innerHTML = 'O Jogador 1 foi o grande vencedor!'
  } else if (dadoSorteado1 < dadoSorteado2) {
    titulo.innerHTML = 'O Jogador 2 foi o grande vencedor!'
  } else {
    titulo.innerHTML = 'A disputa terminou empatada! Jogue novamente :)'
  }
}
play.addEventListener('click', atualizarJogo);