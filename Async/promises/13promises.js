const rawData = ['Dhira, Naya']

const displayData  = (list) => {
  return `Members are ${list}`
}

// =============================
// 1. function returning promise
const getData1 = (data) => {
  return new Promise((res, err) => {
    setTimeout(() => {
      res(data)
    }, 100);
  })
};

console.log('1.', getData1(rawData));

getData1(rawData)
  .then(displayData)
  .then(r => console.log('1.', r))

// =============================
// 2. directly create promise
const getData2 = new Promise(
  (res, err) => {
    setTimeout(() => {
      res(rawData)
    })
  }
)

console.log('2.', getData2);

getData2
  .then(displayData)
  .then(r => console.log('2.', r))

// =============================
// 3. chaining promise
const displayData2 = (list) => {
  const message = `Members3 are ${list}`;
  return Promise.resolve(message)
}

console.log('3.', displayData2(rawData));

getData1(rawData)
  .then(displayData2)
  .then(r => console.log('3.', r))


// RESULT:
// 1. Promise { <pending> }
// 2. Promise { <pending> }
// 3. Promise { 'Members3 are Dhira, Naya' }
// 2. Members are Dhira, Naya
// 1. Members are Dhira, Naya
// 3. Members3 are Dhira, Naya
