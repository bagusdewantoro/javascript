const Stack = require('./stack');

const decimalToBinary = (decNumber) => {
  const remStack = new Stack();
  let number = decNumber; // i.e. 10
  let remainder;
  let binaryString = ''

  while (number > 0) {
    remainder = Math.floor(number % 2); // 0 | 1 | 0 | 1
    remStack.push(remainder);
    number = Math.floor(number / 2);    // 5 | 2 | 1 | 0
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString() // 1 | 10 | 101 | 1010
  }
  return binaryString;
};


// console.log(decimalToBinary(10)) // 1010

module.exports = { decimalToBinary };
