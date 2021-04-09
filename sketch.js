var catImage, mouseImage,background;
var cat,mouse;
function preload() {
    //load the images here
    catImage=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png");
    mouseImage=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png");
    backgroundImage= loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    background=createSprite(250,250,250,250);
    background.addImage(backgroundImage);
    cat=createSprite(600,400,80,80);
    cat.scale=0.2;
    cat.addAnimation("walking",catImage);
    mouse=createSprite(350,450,40,40);
    mouse.scale=0.2;
    mouse.addAnimation("running",mouseImage);
    //create tom and jerry sprites here

}

function draw() {


   if(keyDown("left_arrow")){
       cat.velocityX=-1;
   }
   if(keyDown("right_arrow")){
    cat.velocityX=1;
   }
   if(keyDown("up_arrow")){
    cat.velocityY=-1;
   }
   if(keyDown("DOWN_arrow")){
    cat.velocityY=1;
   }
   
   
    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){


  //For moving and changing animation write code here


}
