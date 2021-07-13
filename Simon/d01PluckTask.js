let students = [
  {name: 'Bagus', university: 'UAJY-FT'},
  {name: 'Anka', university: 'UAJY-FISIP'},
  {name: 'Edwin', university: 'SaDar'},
];

console.log(students[1].university);  // UAJY-FISIP
console.log(students[1]['university']);  // UAJY-FISIP

function getNames(data) {
  return data.map(o => o.name)
}
console.log(getNames(students));  // ['Bagus', 'Anka', 'Edwin']


function pluck(data, propertyName) {
  return data.map(o => o[propertyName]);
}
console.log(pluck(students, 'university'));
console.log(pluck(students, 'name'));


function pluck2(array, prop) {
  let newArray = [];
  for (let elem of array) {
    newArray.push(elem[prop]);
  }
  return newArray;
}
console.log(pluck2(students, 'university'));
console.log(pluck2(students, 'name'));
