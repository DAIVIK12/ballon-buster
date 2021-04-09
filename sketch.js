var red,green,pink,bow,blue,background,arrow
var red1,green1,pink1,bow1,blue1,background1,arrow1



function preload(){
 //load your images here 
 red=loadImage("red_balloon0.png")
  green=loadImage("green_balloon0.png")
 pink=loadImage("pink_balloon0.png")
bow=loadImage("bow0.png")
blue=loadImage("blue_balloon0.png")
background=loadImage("background0.png")
arrow=loadImage("arrow0.png")



}

function setup() {
  createCanvas(600, 600);
  
  background1=createSprite(0,0,600,600)
  background1.addImage(background)
  background1.scale=2.5

  bow1=createSprite(480,220,20,50)
  bow1.addImage(bow)
  bow1.scale=1

  for(var i=60;i<400;i=i+60){
    red1=createSprite(50,i,5,5)
  red1.addImage(red)
  red1.scale=0.1
  }

 for(var i=100;i<400;i=i+60){
    green1=createSprite(100,i,5,5)
  green1.addImage(green)
  green1.scale=0.1
  }

 for(var i=150;i<350;i=i+60){
    blue1=createSprite(150,i,5,5)
  blue1.addImage(blue)
  blue1.scale=0.1
  }

for(var i=180;i<250;i=i+60){
    pink1=createSprite(200,i,5,5)
  pink1.addImage(pink)
  pink1.scale=1
  }





}

function draw() {
background1.velocityX=-3
 if(background1.x<0){
 background1.x=background1.width/2
 }
 bow1.y=World.mouseY
  
  
  drawSprites()
 
}

