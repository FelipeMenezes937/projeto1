//funcao para trocar a cor de fundo
function troca(cor) {
  document.body.style.background = cor;
}

//array contendo o caminho das imagens 
let imagens = [
  './assets/img/1p.jpg',
  './assets/img/2p.jpg',
  './assets/img/3p.jpg',
  './assets/img/4p.jpg'
];
let tempo = 4000;

//funcao para o slide show, vulgo carrossel
function slideShow() {
  let i = 0;
  setInterval(function () {
    if (i >= imagens.length) {
      i = 0; // reinicia o contador
    }
    document.getElementById('img').innerHTML = '<img src="' + imagens[i] + '">';
    console.log(imagens[i]);
    i++;
  }, tempo);
}
slideShow();
