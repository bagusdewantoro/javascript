const defaultEquals = (a, b) => {
  return a === b;
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  removeAt(index) {
    // check for out-of-bounds values
    if (index >= 0 && index < this.count) {
      let current = this.head;

      // removing first item
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        // link previous with current's next: skip it to remove
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  size() {
    return this.count;
  }

  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

const list = new LinkedList;
console.log(list);
list.push(3);
console.log(list)
list.push(5);
console.log(list)
list.push(7);
console.log(list)
list.push(9);
console.log(list.head.next.next)
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());
console.log('remove at 2: ', list.removeAt(2));
console.log(list.toString());

module.exports = LinkedList;
