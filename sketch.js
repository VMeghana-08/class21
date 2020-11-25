var fixedRect,movingRect,fixedRect1;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="blue"
  fixedRect1=createSprite(600, 200, 50, 50);
  fixedRect1.shapeColor="blue"
 // fixedRect1.velocityX=-3;
  fixedRect.velocityX=3
  movingRect=createSprite(700, 200, 50, 50);
  movingRect.velocityX=-3
  movingRect.shapeColor="blue"
  movingRect.debug=true;
  fixedRect.debug=true;
}

function draw() {
  background(0);
 // movingRect.x=mouseX;
 // movingRect.y=mouseY;

 if(isMeeting(fixedRect,movingRect)){
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
 else if(isMeeting(fixedRect1,movingRect)){
    fixedRect1.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else {
    fixedRect1.shapeColor="blue"
    fixedRect.shapeColor="blue"
    movingRect.shapeColor="blue"
  }
 
 rebound(fixedRect,movingRect)
  drawSprites();
}
