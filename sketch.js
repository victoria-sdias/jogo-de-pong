// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let Diametro = 24;
let raio = Diametro /2;

// velocidade da bolinha
let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;

// variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let raqueteAltura = 80;

// Raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

// Placar do jogo
let meusPontos = 0;
let pontosDoOponete = 0;

// sons do jogo
let raquetada;
let ponto;
let trilha;


function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

  
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}


function draw() {
  background(0);
  mostraBolina();
  movimentaBolina();
  verificacolisaoborda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar();
  marcaPontos();
  bolinhaNaoFicaPresa();
  
}

function mostraBolina(){
  circle(xBolinha, yBolinha, Diametro);
}

function movimentaBolina(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificacolisaoborda(){
   
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
   }
  if (yBolinha + raio > height || yBolinha - raio < 0 ){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y){
  rect(x, y, comprimentoRaquete, raqueteAltura)
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaquete(x, y){
   colidiu = collideRectCircle(x, y, comprimentoRaquete, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
   if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function incluirPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(139, 0, 139));
  rect(150,10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(139,0,139));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponete, 470, 26)
}

function marcaPontos(){
  if(xBolinha  > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha <  10){
    pontosDoOponete += 1;
    ponto.play();
  }

}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}










