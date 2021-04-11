// setup canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// object for Ball
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

//  drawing the Ball
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
  ctx.fill();
}

// method to update ball's data based on its coordinate and size
Ball.prototype.update = function() {
  // if x coordinate >= canvas's width (the ball is passing the right edge)
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }
  // if x coordinate <= 0 (the ball is passing the left edge)
  if (( this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }
  // if y coordinate >= canvas's height (the ball is passing the bottom edge)
  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }
  // if y coordinate <= 0 (the ball is passing the top edge)
  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }
  this.x += this.velX;
  this.y += this.velY;
}

// store all of the balls to array, and then populate it
let balls = [];
// number of balls < 25
while (balls.length < 25) {
  let size = random(10, 20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),  // x coordinate
    random(0 + size, height - size),  // y coordinate
    random(-7, 7),  // velocity x
    random(-7, 7),  // velocity y
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',  // color RGB
    size  // size
  );
  balls.push(ball);
}

// function loop
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';  // set color: semi transparent black
  ctx.fillRect(0, 0, width, height);  // draw rectangle
  for (let i=0; i<balls.length; i++) {
    balls[i].draw();
    balls[i].update();
  }
  requestAnimationFrame(loop);
}

loop();
