var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey = createSprite(10,380,20,50);
 monkey.addAnimation("running", monkey_running);
 monkey.scale = 0.1;
  
//create a ground sprite
 ground = createSprite(380,380,800,5);
  ground.x=ground.width/2
  
  score = 0;
}




function draw() {
  createCanvas(400,400);
   console.time();
background("pink");
    ground.velocityX=-5;
  
   fill("blue");
    textSize(20);
    text("score = " + score + "     " + "life = " + survivalTime, monkey.x + 100, monkey.x);
  
//jump when the space button is pressed
if (keyDown("space")&& monkey.y >=157) {
  monkey.velocityY = -10;
}
  monkey.velocityY = monkey.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}
 
  
  
  
  
  obstaclesGroup(obstacle);
  FoodGroup(banana);

  monkey.collide(ground);
FoodGroup();
obstaclesGroup();
  drawSprites();
}
function FoodGroup(){
  if(frameCount%60===0){
   var banana = createSprite(600,100,10,10);
  banana.velocityX=-4;
    banana.y=Math.round(random(120,200))
  banana.addImage(bananaImage);
    banana.scale=0.1;
  banana.depth=monkey.depth
    banana.depth=monkey.depth+1;
   
  }
  
  
 
}
function obstaclesGroup(){
  if(frameCount%60===0){
   var obstacle= createSprite(600,360,10,10);
  obstacle.velocityX=-4;
  obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
  obstacle.depth=monkey.depth
    obstacle.depth=monkey.depth+1;
   obstacle.lifetime = 300;
  }
  
  
  
}




