let xPos = 20;
let yPos = 20;
let xVelo = 0;
let yVelo = 0;
let gravity = 1.1;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200, 200, 100, 100); // a circle
  rect(xPos,yPos,40,40);
  yVelo = yVelo + gravity;
  yPos = yPos + yVelo;
  if (yPos > (400-40)){
    yPos = 400-40; // grounded it
    yVelo = yVelo * -0.9 //made it bouncy
    if (Math.abs(yVelo) < 2){
        yVelo = 0;
    }
}
}

function doubleClicked(){
    yPos = mouseY;
    xPos = mouseX;
    yVelo = 0;
}
