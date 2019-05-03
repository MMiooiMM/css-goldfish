let num = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B];

function setup() {
  createCanvas(980, 300);
  frameRate(1);
}

function draw() {
  background(220);
  var date = new Date();
  sevenSegment(num[Math.floor(date.getHours() / 10)], 0);
  sevenSegment(num[date.getHours() % 10], 140);
  sevenSegment(num[Math.floor(date.getMinutes() / 10)], 320);
  sevenSegment(num[date.getMinutes() % 10], 460);
  sevenSegment(num[Math.floor(date.getSeconds() / 10)], 640);
  sevenSegment(num[date.getSeconds() % 10], 780);
  colon();
}

function getColor(val, shift) {
  let r = 0;
  let g = 0;
  let b = 0;
  let a = 255 * ((val >> shift) & 1);
  return color(r, g, b, a);
}

function colon() {
  fill(0);
  rect(320, 120, 18, 18);
  rect(320, 160, 18, 18);
  rect(640, 120, 18, 18);
  rect(640, 160, 18, 18);
}

function sevenSegment(val, move) {
  // A
  fill(getColor(val, 6));
  rect(move + 60, 20, 78, 18);
  // B
  fill(getColor(val, 5));
  rect(move + 140, 40, 18, 98);
  // C
  fill(getColor(val, 4));
  rect(move + 140, 160, 18, 98);
  // D
  fill(getColor(val, 3));
  rect(move + 60, 260, 78, 18);
  // E
  fill(getColor(val, 2));
  rect(move + 40, 160, 18, 98);
  // F
  fill(getColor(val, 1));
  rect(move + 40, 40, 18, 98);
  // G
  fill(getColor(val, 0));
  rect(move + 60, 140, 78, 18);
}