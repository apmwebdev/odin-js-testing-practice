import functions from './functions';

test('capitalize', () => {
  expect(functions.capitalize('test')).toEqual('Test');
});

test('reverse string', () => {
  expect(functions.reverseString('test')).toEqual('tset');
});

test('adds 1 + 2 to equal 3', () => {
  expect(functions.calculator.add(1, 2)).toBe(3);
});

test('3 - 2 equals 1', () => {
  expect(functions.calculator.subtract(3, 2)).toBe(1);
});

test('3 * 2 equals 6', () => {
  expect(functions.calculator.multiply(3, 2)).toBe(6);
});

test('6 / 2 equals 3', () => {
  expect(functions.calculator.divide(6, 2)).toBe(3);
});

test('Cipher works with lowercase string', () => {
  expect(functions.caesarCipher('test', 2)).toBe('vguv');
});

test('Cipher works with upper and lower case', () => {
  expect(functions.caesarCipher('tEsT', 3)).toBe('wHvW');
});

test('Cipher works with non-letter characters', () => {
  expect(functions.caesarCipher('Blah!!', 4)).toBe('Fpel!!');
});

test('Cipher works with large shifts', () => {
  expect(functions.caesarCipher('Foobar!', 59)).toBe('Mvvihy!');
});

test('Analyze an array', () => {
  expect(functions.analyzeArray([2, 1, 5, 4, 3])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});