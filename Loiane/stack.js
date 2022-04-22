class Stack {
  constructor() {
    // this.items = []
    this.count = 0;
    this.items = {};
  }

  push(element){
    // this.items.push(element);
    this.items[this.count] = element; // use less memory than push?
    this.count++;
  }

  pop(){
    // return this.items.pop();
    if (this.isEmpty()){
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek(){
    // return this.items[this.items.length -1];
    if (this.isEmpty()){
      return undefined;
    }
    return this.items[this.count - 1]
  }

  isEmpty(){
    // return this.items.length === 0;
    return this.count === 0;
  }

  size(){
    // return this.items.length;
    return this.count;
  }

  clear(){
    // this.items = [];
    this.items = {};
    this.count = 0;
  }

  toString(){ // only this method will have O(n)
    if (this.isEmpty()){
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++){
      objString = `${objString}, ${this.items[i]}`
    }
    return objString;
  }
}


// const stack = new Stack;
// stack.push(2)
// stack.push(3)
// stack.clear()
// stack.push(10)
// stack.push(11)
// stack.push(12)
// console.log(stack.pop())
// stack.push(30)
// console.log(stack)
// console.log(stack.peek())
// console.log(stack.size())
// console.log(stack.toString()) // only this method will have O(n)

// console.log(Object.getOwnPropertyNames(stack));
// console.log(Object.keys(stack));
// console.log(stack.items);

module.exports = Stack;
