function setup() {
  createCanvas(1920, 1080);
  background(color(54,54,54))
}

function draw() {
  stroke("black");
  fill(color(255,182,193));
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
