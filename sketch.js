var fixedRect,movingRect;
var gO1,gO2; 
function setup() {
  createCanvas(800,800);
 fixedRect = createSprite(400, 100, 50, 80);
 fixedRect.shapeColor = "green";
 fixedRect.velocityY = +5;
 movingRect = createSprite(400, 800, 80, 50);
 movingRect.shapeColor = "green";
 movingRect.velocityY = -5;
 gO1 = createSprite(600, 200, 80, 50);
 gO1.shapeColor = "green";
 gO2 = createSprite(750, 200, 80, 50);
 gO2.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  gO2.x = World.mouseX;
  gO2.y = World.mouseY;
  if(isTouching(gO1,gO2)){
    gO2.shapeColor = "blue";
    gO1.shapeColor = "blue";
  }
  else
  {
    gO2.shapeColor = "green";
    gO1.shapeColor = "green";
  }
  bounceOff(movingRect, fixedRect);
  drawSprites();
}
