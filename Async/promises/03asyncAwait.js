const isMomHappy = true;

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

// 2nd promise
const showOff = async (phone) => {
  const message = `I have a new ${phone.color} ${phone.brand} phone`
  return Promise.resolve(message);
}

// call our promise in ES7 async await style
const askMom = async () => {
  try {
    console.log('before asking Mom');
    let phone = await willGetNewPhone;
    let message = await showOff(phone);
    console.log(message);
    console.log('after asking mom');
  }
  catch (error) {
    console.log(error.message);
  }
}

askMom()
// before asking Mom
// I have a new black Samsung phone
// after asking mom

// // Other Way, using immediately invoked function
// (async () => {
//     await askMom();
// })();
