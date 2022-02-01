function setup() {
  createCanvas(720, 720);
  noFill();
  console.log('canvas')
  console.log("The faculty of 5 is 1*2*3*4*5 = " + faculty(5)); // function faculty below
}


// basic shape =======================================
function draw() {
  point(60,50);
  fill(128);
  strokeWeight(1);
  ellipse(40, 50, 60, 60);
  rect(50, 50, 40, 20);
}


// if left clicked =======================================
function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}


// with alpha bacground =======================================
function draw() {
  background('rgba(0,255,0, 0.25)'); // give alpha to blur previous ellipse from mouse
  ellipse(mouseX, mouseY, 40, 40);
  frameRate(2); // 2 frames per second
  console.log('draw');
  // console.log("mouseposition:" + mouseX + "," + mouseY);
  // console.log("mousekey pressed?:" + mouseIsPressed);
}


// translate =======================================
function draw() {
  background('rgba(0,255,0, 0.25)');
  if (mouseIsPressed) {
    translate(0,300)
    console.log('translate(0,300)')
  }
  translate(40, 15); // translate 3 rows below
  line(0, -10, 0, 40);
  line(-8, -5, 8, 5);
  line(-8, 5, 8, -5);
  translate(20, 50); // translate 3 rows below
  line(0, -10, 0, 40);
  line(-8, -5, 8, 5);
  line(-8, 5, 8, -5);
}


// create own method =======================================
const drawStar = () => {
  line(0, -10, 0, 10);
  line(-8, -5, 8, 5);
  line(-8, 5, 8, -5);
}
function draw() {
  translate(40, 15);
  drawStar();
  translate(20, 50);
  drawStar();
}
const faculty = (theValue) => { // called in setup()
  let result = 1;
  for (var i = 1; i <= theValue; i++) {
  result = result * i;
  }
  return result
}


// increase translation x value when clicked =======================================
let xCoordinate = 30;

function draw() {
  background('rgba(0,255,0, 0.25)');
  if (mouseIsPressed) {
    translate(xCoordinate,0)
    console.log(`xCoordinate = ${xCoordinate}`)

    xCoordinate <= 600 ? xCoordinate += 30 : xCoordinate = 60
  }
  rect(50, 50, 40, 20);
  frameRate(8);
}


// function draw line =======================================
const drawLine = (lineLength) => {
  line(0, 0, lineLength * 20, 100);
  line(100, 0, lineLength * 20, 100);
  console.log(`lineLength = ${lineLength}`)
}

// for loop (executed directly) =======================================
function draw() {
  for (let i = 0; i <= 5; i++) {
    drawLine(i);
    console.log(i)
  }
  frameRate(1);
}

// executed per frame =======================================
let lineLength = 0;

function draw() {
  background('rgba(0, 255, 0, 0.25)')
  drawLine(lineLength)
  lineLength <= 15 ? lineLength += 1 : lineLength = 0;
  frameRate(2);
}
