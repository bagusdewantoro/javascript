// npm run 1equal

function isEqual(one, two) {
  if (one.length === 0 && two.length === 0) {
    console.log('\ncondition 1');
    return true;
  } else if ((one.length && two.length !== 0) && one.length === two.length) {
    for (let elem of one) {
      if (two.includes(elem)) {
        console.log('\ncondition 2');
        return true;
      }
    }
  } else {
    console.log('\ncondition 3');
    return false;
  }
}

console.log(isEqual([], []));

console.log(isEqual(['a', 'b'], ['a']));

console.log(isEqual(['a'], ['a', 'b']));

console.log(isEqual(['a', 'b', 'c'], ['b', 'a', 'c']));

let a = [];
let b = [];

console.log(a === b);
console.log(isEqual(a, b));
