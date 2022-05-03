const rawData = ['Dhira, Naya']

const displayData = (list) => {
  return `Members are ${list}`;
}

// =============================
const getData1 = (data) => {
  return new Promise((res, err) => {
    setTimeout(() => {
      res(data)
    }, 100);
  })
};

const result1 = async () => {
  let list = await getData1(rawData);
  let message = displayData(list);
  console.log('1.', message)
}

result1();

console.log('2.', result1, result1())

// 2. [AsyncFunction: result1] Promise { <pending> }
// 1. Members are Dhira, Naya
// 1. Members are Dhira, Naya
