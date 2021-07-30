import {getNames, pluck, pluck2} from "../d01PluckTask";
import compareObjects from "../d02ObjectTask";
import createCounter from "../d03CounterTask";

// test getNames
it('should get values', () => {
  let students = [
    {name: 'Bagus', university: 'UAJY-FT'},
    {name: 'Anka', university: 'UAJY-FISIP'},
    {name: 'Edwin', university: 'SaDar'},
  ];
  expect(getNames(students)).toEqual(['Bagus', 'Anka', 'Edwin']);
});

// test pluck
it('should pluck empty array', () => {
  expect(pluck([], 'name')).toEqual([]);
});

// test pluck
it('should pluck values', () => {
  let students = [
    {name: 'Bagus', university: 'UAJY-FT'},
    {name: 'Anka', university: 'UAJY-FISIP'},
    {name: 'Edwin', university: 'SaDar'},
  ];
  expect(pluck(students, 'university')).toEqual(
    ['UAJY-FT', 'UAJY-FISIP', 'SaDar']);
});

// test compareObjects
it('should consider empty objects to be equal', () => {
  let result = compareObjects({}, {});
  expect(result).toEqual(true);
});

// test compareObjects
it('should consider same objects', () => {
  let result = compareObjects(
    {one: 1, two: 2},
    {two: 2, one: 1}
  );
  expect(result).toEqual(true);
});

// test compareObjects
it('should consider different objects', () => {
  let result = compareObjects(
    {one: 1, two: 2},
    {one: 2, two: undefined}
  );
  expect(result).toEqual(false);
});

// test Counter
it('should start at zero', () => {
  let counter=createCounter();
  expect(counter.get()).toEqual(0);
});
