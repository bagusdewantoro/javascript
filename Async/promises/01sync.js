const isMomHappy = true; // try change this to false

// first function
const willGetNewPhone = () => {
  if (isMomHappy) {
    const phone = {
      brand: 'Samsung',
      color: 'black'
    }
    return phone;
  } else {
    return 'mom is not happy';
  }
};
console.log(willGetNewPhone()); //{ brand: 'Samsung', color: 'black' }

// second function invoke first function
const showOff = (things) => {
  const message = `I have a new ${things.color} ${things.brand} phone`;
  return message;
};
console.log(showOff(willGetNewPhone())); // I have a new black Samsung phone

const showOffCallback1 = () => {
  const things = () => {
    if (isMomHappy) {
      const phone = {
        brand: 'Samsung',
        color: 'black'
      }
      return phone;
    } else {
      return 'mom is not happy';
    }
  };
  return `I have a new ${things().color} ${things().brand} phone`;
};
console.log(showOffCallback1()); // I have a new black Samsung phone

const showOffCallback2 = () => {
  return `I have a new ${(() => {
    if (isMomHappy) {
      const phone = {
        brand: 'Samsung',
        color: 'black'
      }
      return phone;
    } else {
      return 'mom is not happy';
    }
  })().brand}`;
};
console.log(showOffCallback2()); // I have a new Samsung
