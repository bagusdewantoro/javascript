class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count ++
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  isEmpty() {
    // return this.count - this.lowestCount === 0;
    // or
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString(){ // only this method will have O(n)
    if (this.isEmpty()){
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++){
      objString = `${objString}, ${this.items[i]}`
    }
    return objString;
  }
}

const queue = new Queue;
console.log(queue);
queue.enqueue('pertama');
console.log(queue);
queue.dequeue();
console.log(queue);
console.log(queue.isEmpty())
queue.enqueue('kedua');
queue.enqueue('ketiga');
console.log(queue);
queue.dequeue();
console.log(queue);
queue.enqueue('keempat');
queue.enqueue('kelima');
console.log(queue.peek());
console.log(queue.toString());

module.exports = Queue;
