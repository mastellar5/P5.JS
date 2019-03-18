//Mouse Press
//https://p5js.org/examples/input-mouse-press.html

function setup() {
    var myCanvas = createCanvas(720, 400);
    myCanvas.parent('myContainer');
  background(230);
  strokeWeight(2);
}

function draw() {
  if (mouseIsPressed){
    stroke(255);
  }
  else {
    stroke(237,34,93);
  }
  line(mouseX-66, mouseY, mouseX+66, mouseY);
  line(mouseX, mouseY-66, mouseX, mouseY+66);
}
