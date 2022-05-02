const rawData = ['Dhira, Naya']

const displayData  = (list) => {
  return `Members are ${list}`
}

const getData = (data, cbFunc) => {
  setTimeout(() => {
    console.log(cbFunc(data))
  }, 100);
};

getData(rawData, displayData) // Members are Dhira, Naya
