let x;
let y;

let xspeed;
let yspeed;

function setup() {
  createCanvas(800, 600);
  x = 400;
  y = 400;
  xspeed = 5;
  yspeed = 5;
}

function draw() {
  background(0);
  rect(x, y, 80, 60);
  x = x + xspeed;
  y = y + yspeed;
  
  if(x >= width - 80 || x <= 0){
    xspeed = xspeed * -1;
  }
  
  if(y >= height - 60 || y <= 0){
    yspeed = yspeed * -1;
  }
}