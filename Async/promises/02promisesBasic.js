// Promise syntax:
// new Promise((resolve, reject) => { ... } );

// CREATING PROMISE
const isMomHappy = true;  // try change this to false
// Promise
const willGetNewPhone = new Promise(
  (res, err) => { // argument for resolve and reject/error
    if (isMomHappy) {
      const phone = {
        brand: 'Samsung',
        color: 'black'
      };
      res(phone); // fulfiled
    } else {
      const reason = new Error('mom is not happy');
      err(reason); // reject
    }
  }
);
console.log(willGetNewPhone) // if true: // Promise { { brand: 'Samsung', color: 'black' } }

// CONSUMING PROMISE
// Call our promise
const askMom = () => {
  return willGetNewPhone
    .then(fulfilled => console.log(fulfilled))
    // or this one (shorthand)
    // .then(console.log)
    .catch(error => console.log(error.message));
};
askMom(); // { brand: 'Samsung', color: 'black' }

// more easier steps
willGetNewPhone
  .then(ok => console.log(ok))
  .catch(not => console.log(not.message))


// ======================================================================

// CHAINING PROMISE
// 2nd promise
const showOff = (phone) => {
  // return new Promise(
  //   (res, err) => {
  //     const message = `I have a new ${phone.color} ${phone.brand} phone`;
  //     res(message);
  //   }
  // )
  // 2nd Way (shorten)
  const message = `I have a new ${phone.color} ${phone.brand} phone`
  return Promise.resolve(message);
}
console.log(showOff)

// call our promise
const askMom3 = () => {
  willGetNewPhone
  .then(showOff) // chain it here
  .then(fulfilled => console.log(fulfilled))
  .catch(error => console.log(error.message))
};
askMom3(); // I have a new black Samsung phone
