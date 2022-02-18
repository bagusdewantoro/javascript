import p5 from 'p5';

const sketch = (s) => {
  s.setup = () => {
    s.createCanvas(330, 330);
  }
  s.draw = () => {
    s.background(0);
    s.circle(50, 50, 50);
  }
}

const sketchInstance = new p5(sketch);

console.log('p5_bagus.js success');
