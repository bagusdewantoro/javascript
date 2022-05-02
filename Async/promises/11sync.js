const rawData = ['Dhira, Naya']

const displayData  = (list) => {
  return `Members are ${list}`
}

const getData = (data) => {
  setTimeout(() => {
    console.log(data);
  }, 100);
};

console.log(displayData(getData(rawData)));
// Members are undefined
// [ 'Dhira, Naya' ]
