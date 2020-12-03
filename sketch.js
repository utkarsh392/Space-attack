var spaceship,spaceshipImage
var invisibleground1,invisibleground2
var invisibleground3,invisibleground4
var bg,bg_moving
var invader1,invader2,invader3,invader4
var obstacle,invader
var laser,laser_moving,laserGroup
var score




function preload(){
spaceshipImage = loadImage("download (3).png")
bg_moving= loadImage("bg3.jpg")
invader1 = loadImage("invades 2.png")
invader2 = loadImage("download (2).jpg")
invader3 = loadImage("invades 2.png")
invader4 = loadImage("download (1).jpg")
laser_moving = loadImage("laser.jpg")
}

function setup() {
 createCanvas(400,400)
 
  bg=createSprite(200,200,900,900)
  bg.addImage(bg_moving)
  bg.velocityY=-7
  bg.scale=2
  
  
  
  spaceship=createSprite(200,340,50,50)
  spaceship.addImage(spaceshipImage)
  spaceship.scale=0.3
  
  invisibleground1=createSprite(200,390,500,5)
  invisibleground1.visible=false
  invisibleground2=createSprite(1,200,5,500)
  invisibleground2.visible=false
  invisibleground3=createSprite(390,200,5,500)
  invisibleground3.visible=false
  invisibleground4=createSprite(200,1,500,5);
  invisibleground4.visible=false
  score=0
  laserGroup= new Group()
}

function draw() {
  
    if(bg.y<50){
      bg.y = 400
    }
  
  
  
if(keyDown("left_arrow")){
  spaceship.x= spaceship.x-9
}

if(keyDown("right_arrow")){
  spaceship.x=spaceship.x+9
}
  
if(keyDown("down_arrow")){
  spaceship.y=spaceship.y+9
}

if(keyDown("up_arrow")){
  spaceship.y = spaceship.y-9
}
  
if(keyDown("space")){
  createLaser()
}

spaceship.collide(invisibleground1);
spaceship.collide(invisibleground2);
spaceship.collide(invisibleground3);
spaceship.collide(invisibleground4);

  invaderAttack()
 drawSprites();
 
  textSize(15)
  text("Score :"+ score,280,50)
}


function invaderAttack(){
  if(frameCount%200===50){
  var  invader= createSprite(200,165,10,40);
    invader.velocityY=7
    invader.x=Math.round(random(10,380))
  var rand =Math.round(random(1,4))
  switch(rand) {
      case 1: invader.addImage(invader1);
              break;
      case 2: invader.addImage(invader2);
              break;
      case 3: invader.addImage(invader3);
              break;
      case 4: invader.addImage(invader4);
              break;
      default: break;
    }
    invader.scale=0.3
  }
}
function createLaser() {
   laser=createSprite(200,200,1,1)
  laser.addImage(laser_moving)
  laser.x = spaceship.x
  laser.y=300
  laser.velocityY= -8;
  laser.lifetime = 100;
  laser.scale = 0.08;
  laserGroup.add(laser);
}