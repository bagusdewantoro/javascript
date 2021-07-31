import createCounter from "../d03CounterTask";

it('should start at zero', () => {
  let counter=createCounter();
  expect(counter.get()).toEqual(0);
});
