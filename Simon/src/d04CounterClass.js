class Counter {
  count = 0;
  constructor(initialCount = this.count) {
    this.count = initialCount;
  }
  inc() {
    this.count += 1;
    console.log('Add 1');
  }
  dec() {
    this.count -= 1;
    console.log('Substract 1');
  }
  getCount() {
    return this.count;
  }
}

let c = new Counter(55);
c.inc();
console.log(c.getCount());

let d = new Counter();
d.inc();
console.log(d.getCount());

console.log(c.inc() === d.inc());
