var bg;
var arrow,arrowImg
var bow,bowImg
var chain,chainImg
var player
var obst1,obst1Img
var option1,option2,option3,option4
var option1img,option2img,option3img,option4img

function preload(){
  bg = loadImage("image/Background.jpg")
  arrowImg = loadImage("image/Arrow.jpg")
  bowImg = loadImage("image/Bow.jpg")
  chainImg = loadImage("image/chain-saw.jpg")
  option1img = loadImage("image/player1.png")
  option2img = loadImage("image/player2.png")
  option3img = loadImage("image/player3.png")
  option4img = loadImage("image/player4.png")
  obst1Img = loadImage("image/monster_08.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  option1 = createSprite(100,windowHeight/2,10,30);
  option1.addImage(option1img);
  option1.scale = 0.7;

  option2 = createSprite(windowWidth/4+100,windowHeight/2,10,30);
  option2.addImage(option2img);
  option2.scale = 0.7;

  option3 = createSprite(windowWidth/2+100,windowHeight/2,10,30);
  option3.addImage(option3img);
  option3.scale = 0.7;

  option4 = createSprite(windowWidth-150,windowHeight/2,10,30);
  option4.addImage(option4img);
  option4.scale = 0.7;
}

function draw() {
  background(bg);

  textSize(30);
  fill("red");
  text("Choose a player from these options",windowWidth/2-200,windowHeight/8);

  if(mousePrssedOver(option1)){
    /*option2.visible = false
    option3.visible = false
    option4.visible = false*/
  }

  drawSprites();
}