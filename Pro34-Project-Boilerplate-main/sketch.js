
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;
var fruit;
var tramp;
var gameState = "play";



function preload(){
  backgroundImg = loadImage("beach.jpeg");
  fruit = loadImage("coconut.png");
  tramp = loadImage("trampoline.png");
}

function setup() {
  createCanvas(650,650);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  image(backgroundImg,0,0,width,height);
  image(fruit,300,100,90,60);
  image(tramp,250,500,200,180);
  
  Engine.update(engine);

  

  fruit.bounceOff(topEdge);
  fruit.bounceOff(rightEdge);
  fruit.bounceOff(leftEdge);
  fruit.bounceOff(tramp);

  tramp.x = World.mouseX;
  if(gameState === PLAY){
   
    edges = createEdgeSprites();
    tramp.x = World.mouseX;
  }

  if (ball.isTouching(bottomEdge)) {
    lifeOver();
    
    
    }  
 
  
}

function mousePressed(){

  if(gamestate == "serve"){
    gamestate = "play";
    ball.velocityY = -7;
    ball.velocityX = -7;
  }
}



