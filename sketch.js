var imagemDaTorre, torre;
var imgFantasma, fantasma;
var imgDoor;
var imgclimber;


function preload() {
  imagemDaTorre = loadImage("tower.png");
  imgFantasma = loadImage("ghost-standing.png");
  imgDoor = loadImage("door.png");
  imgclimber = loadImage("climber.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  torre = createSprite(windowWidth / 2, windowHeight / 2);
  torre.addImage("tower", imagemDaTorre);
  torre.velocityY = 1;
  torre.scale = 3.5;

  fantasma = createSprite(windowWidth / 2, windowHeight / 2);
  fantasma.addImage("fantasma", imgFantasma);
  fantasma.scale = 0.55;


  grupoPorta = new Group();
  grupoClimber = new Group();


}


function draw() {
  drawSprites();

  if (torre.y >= height) {
    torre.y = height / 6;

  }


  if (keyDown("left")) {
    fantasma.x = fantasma.x - 5;
  }

  if (keyDown("right")) {
    fantasma.x += 5;
  }

  if (touches.length > 0 || keyDown("space")) {
    fantasma.velocityY = -10;
  }
             
  
  if (grupoClimber.isTouching(fantasma)){
    fantasma.velocityY = 0
  }
  fantasma.velocityY = fantasma.velocityY + 0.8;

  geraPorta();




}

function coordenadas() {
  fill("yellow");
  textSize(20);
  text(mouseX + "," + mouseY, mouseX, mouseY);

}

function geraPorta() {
  if (frameCount % 500 === 0) {
    var porta = createSprite(random(100, windowWidth - 100), 0);
    var climber = createSprite(porta.x, porta.y + 100);
    
    porta.velocityY = torre.velocityY;
    climber.velocityY = porta.velocityY;
    porta.addImage("door", imgDoor);
    climber.addImage("climber", imgclimber);
    porta.scale = 1.5;
    climber.scale = 1.50;
    porta.depth = fantasma.depth -1;
    climber.depth = porta.depth;
    grupoPorta.add(porta);
    grupoClimber.add(climber);
  }

     

}          
