let cor;
let posicaoHorizontal // x
let posicaoVertical // y

function setup() {
  createCanvas(600, 600);
  background(color(100, 0 , 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}
function draw() {

  fill(cor);
  circle(circuloX[0], circuloY[0], 50);
  circle(circuloX[1], circuloY[1], 50);
  
  circuloX[0]+= random(0,3);
  circuloY[0]+= random(-3,3);
  circuloX[1]+= random(0,3);
  circuloY[1]+= random(-3,3);
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}
