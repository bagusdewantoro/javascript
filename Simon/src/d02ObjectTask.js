// npm run 2object

let object0 = {one: 1, two: 2};
let object1 = {two: 2, one: 1};
let object2 = {one: 1, two: undefined};

function compareObjects(objOne, objTwo) {
  let keysOne = Object.keys(objOne);
  let keysTwo = Object.keys(objTwo);
  if (keysOne.length !== keysTwo.length) {
    return false;
  }
  for (let key of keysOne) {
    if (objOne[key] !== objTwo[key]) {
      return false;
    }
  }
  return true;
}

export default compareObjects;
