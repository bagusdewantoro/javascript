let students = [
  {studentID: '345', name: 'Bagus'},
  {studentID: '678', name: 'Anka'},
];

let indexedStudentList = {};
for (let student of students) {
  let {studentID} = student;
  indexedStudentList[studentID] = student;
};

console.log(indexedStudentList);


function getStudentByID(id){
  for (let student of students) {
    if (student.studentID === id) {
      console.log(student.name);
    }
  }
}

getStudentByID('345');

function doThing() {
  let result = 'success';
  let numItemsChanged = 7;
  return [result, numItemsChanged];
}

let [one, two] = doThing();
