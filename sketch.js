var bg,bgImg;
var player, shooterImg, shooter_shooting;
var gost_1, gost_img_1,gost_img_2,gost_img_3,gost_img_4;
var obstacle, obsticle_img;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  gost_img_1 = loadImage("assets/gost_1.png");
  gost_img_2 = loadImage("assets/gost_2.png");
  gost_img_3 = loadImage("assets/gost_3.png");
  gost_img_4 = loadImage("assets/gost_4.png");
//  obsticle_img = loadImage("asstes/rock_1.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(displayWidth,displayHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 

 
if(frameCount%50===0){
  spawn_gosts();
}


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();
text(mouseX+","+mouseY, mouseX, mouseY );

}

function spawn_gosts(){
  var gost_y = Math.round( random (30,710));
  gost_1 = createSprite(1400, gost_y,  60, 60);
  gost_1.velocityX = -5;
  var gost_random = Math.round( random(1,4));
  switch(gost_random){
    case 1 : gost_1.addImage(gost_img_1);
    break;
    case 2 : gost_1.addImage(gost_img_2);
    break;
    case 3 : gost_1.addImage(gost_img_3);
    break;
    case 4 : gost_1.addImage(gost_img_4);

    break;
    default:break;

  }

  gost_1.lifetime = 500;
}