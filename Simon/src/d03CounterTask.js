
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

let counter = createCounter();
//console.log(counter);

//console.log(counter.get());
//counter.inc();
//counter.inc();
//console.log(counter.get());
//counter.dec();
//console.log(counter.get());

export default createCounter;
