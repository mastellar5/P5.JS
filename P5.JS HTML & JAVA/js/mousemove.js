//Mouse Movement
//https://p5js.org/examples/input-mouse-2d.html

function setup() {
  var myCanvas = createCanvas(720, 400);
  myCanvas.parent('myContainer');
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(230); 
  fill(244,122,158);
  rect(mouseX, height/2, mouseY/2+10, mouseY/2+10);
  fill(237,34,93);
  var inverseX = width-mouseX;
  var inverseY = height-mouseY;
  rect(inverseX, height/2, (inverseY/2)+10, (inverseY/2)+10);
}


