var ground,luka;
var groundImage1
var groundImage2
var groundImage3
function preload(){
groundImage1 = loadImage("IMAGES/Village.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  ground =createSprite(displayWidth/2, displayHeight/2,displayWidth,displayHeight);
  ground.addImage(groundImage1)
  ground.scale=2.5
  ground.velocityX=-3

}

function draw() {
  background(0);  
  drawSprites();
  if(ground.x<0){
    ground.x=displayWidth/2
  }
}