// Promise syntax:
// new Promise((resolve, reject) => { ... } );

// CREATING PROMISE
const isMomHappy = true;  // try change this
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

// CONSUMING PROMISE
// Call our promise
const askMom = () => {
  willGetNewPhone
    .then((fulfilled) => console.log(fulfilled))
    // or this one (shorthand)
    // .then(console.log)
    .catch((error) => console.log(error.message));
};
askMom();

// CHAINING PROMISE
// 2nd promise
const showOff = (phone) => {
  return new Promise(
    (res, err) => {}
  )
}
