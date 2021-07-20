// npm run 1pluck

let students = [
  {name: 'Bagus', university: 'UAJY-FT'},
  {name: 'Anka', university: 'UAJY-FISIP'},
  {name: 'Edwin', university: 'SaDar'},
];

//console.log(students[1].university);  // UAJY-FISIP
//console.log(students[1]['university']);  // UAJY-FISIP

function getNames(data) {
  return data.map(o => o.name)
}

function pluck(data, propertyName) {
  return data.map(o => o[propertyName]);
}

function pluck2(array, prop) {
  let newArray = [];
  for (let elem of array) {
    newArray.push(elem[prop]);
  }
  return newArray;
}

// export default pluck;
export {getNames, pluck, pluck2};
