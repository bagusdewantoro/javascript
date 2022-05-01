const isMomHappy = true; // try change this to false

const askMom = () => {
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


console.log(askMom());
