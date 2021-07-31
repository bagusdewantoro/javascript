
function createCounter() {
  let initial = 0;
  return {
    inc: () => {
      initial += 1;
      console.log("Add 1");
    },
    dec: () => {
      initial -= 1;
      console.log("Substract 1");
    },
    get: () => {
      return initial;
    },
  };
}

export default createCounter;
