// @flow

//import compareObjects from "../d02ObjectTask";
import createCounter from "../d03CounterTask";


// test Counter
it('should start at zero', () => {
  let counter=createCounter();
  expect(counter.get()).toEqual(0);
});
