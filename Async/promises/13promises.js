const rawData = ['Dhira, Naya']

const displayData  = (list) => {
  return `Members are ${list}`
}

const getData = (data) => {
  return new Promise((res, err) => {
    setTimeout(() => {
      res(data)
    }, 100);
  })
};

getData(rawData)
  .then(displayData)
  .then(r => console.log(r))
// Members are Dhira, Naya
