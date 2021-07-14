// npm run 1array

function ownMap(array, fn) {
  let newArray = [];
  for (let elem of array) {
    let newElem = fn(elem);
    newArray.push(newElem);
  }
  return newArray;
}

let result = ownMap([1,2,3], num => num * 2);
console.log(result);

let b = [0, 1, 2];
console.log(ownMap(b, num => num * 3));
