var imagemDaTorre, torre;
var imgFantasma, fantasma;
var imgDoor;
var imgclimber


function preload() {
  imagemDaTorre = loadImage("tower.png");
  imgFantasma = loadImage("ghost-standing.png");
  imgDoor = loadImage("door.png");
  imgclimber = loadImage("climber.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  torre = createSprite(windowWidth, windowHeight);
  torre.addImage("tower", imagemDaTorre);
  torre.velocityY = 1;

  fantasma = createSprite(windowWidth, windowHeight);
  fantasma.addImage("fantasma", imgFantasma);
  fantasma.scale = 0.35;

  
  grupoPorta = new Group();
  

}


function draw() {
  drawSprites();

  if (torre.y >= height){
    torre.y = height/2;

  }
  coordenadas();

  if (keyDown("left")){
    fantasma.x = fantasma.x - 5;
  }

  if (keyDown("right")){
    fantasma.x +=  5;
  }

  if ((touches.length > 0 || keyDown("space")){
    fantasma.velocityY = -10;
  }
  
  fantasma.velocityY = fantasma.velocityY + 0.8;
  
  geraPorta();

  


}

function coordenadas(){
  fill("yellow");
  textSize(20);
  text(mouseX+","+mouseY, mouseX, mouseY);

}

function geraPorta(){
  if(frameCount % 240 === 0){
    var porta = createSprite(random(windowWidth, windowHeight), 0);
    var climber = createSprite(porta.x, porta.y);
    porta.velocityY = torre.velocityY;
    climber.velocityY = porta.velocityY;
    porta.addimage = (imgDoor);
    climber.addimage = (imgClimber);
  }
  

}