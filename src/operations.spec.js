import {
  sum,
  sumSpread,
  minus,
  multiply,
  divide,
  pow,
  isBigger,
  isSmaller,
  getUserInfo,
} from './examples';

test('should be 3 when called sum with args 1 and 2', () => {
  const first_integer = 1;
  const second_integer = 2;
  expect(sum(first_integer, second_integer)).toEqual(3);
});

test('should be 60 when called sumSpread with args = ...[10,20,30] ', () => {
  const data = [10, 20, 30];

  expect(sumSpread(...data)).toEqual(60);
});

test('should begin with zero and combine values as string when called sumSpread with args = ...[anystr,20,30]', () => {
  const anystr = 'some_str';
  const data = [anystr, 20, 30];

  expect(sumSpread(...data)).toBe(`0${anystr}2030`);
});

test('should be 10 when called minus with args 15 and 5', () => {
  const first_integer = 15;
  const second_integer = 5;

  expect(minus(first_integer, second_integer)).toEqual(10);
});

test('should be 27 when called multiply with args 9 and 3', () => {
  const first_integer = 9;
  const second_integer = 3;

  expect(multiply(first_integer, second_integer)).toEqual(27);
});

test('should be 7 when called divide with args 35 and 5', () => {
  const first_integer = 35;
  const second_integer = 5;

  expect(divide(first_integer, second_integer)).toEqual(7);
});

test('should be 27 when called pow with args 3 and 3', () => {
  const main_integer = 3;
  const in_power_of = 3;

  expect(pow(main_integer, in_power_of)).toEqual(27);
});

//isBigger begin
test('should be true when called isBigger with args 20 and 10', () => {
  const first_integer = 20;
  const second_integer = 10;

  expect(isBigger(first_integer, second_integer)).toEqual(true);
});

test('should be false when called isBigger with args 10 and 20', () => {
  const first_integer = 10;
  const second_integer = 20;

  expect(isBigger(first_integer, second_integer)).toEqual(false);
});

test('should be false when called isBigger with args 10 and 10', () => {
  const first_integer = 10;
  const second_integer = 10;

  expect(isBigger(first_integer, second_integer)).toEqual(false);
});
//isBigger end

//isSmaller begin
test('should be true when called isSmaller with args 5 and 10', () => {
  const first_integer = 5;
  const second_integer = 10;

  expect(isSmaller(first_integer, second_integer)).toEqual(true);
});

test('should be false when called isSmaller with args 10 and 5', () => {
  const first_integer = 10;
  const second_integer = 5;

  expect(isSmaller(first_integer, second_integer)).toEqual(false);
});

test('should be false when called isSmaller with args 5 and 5', () => {
  const first_integer = 5;
  const second_integer = 5;

  expect(isSmaller(first_integer, second_integer)).toEqual(false);
});
//isSmaller end

test('should return object with fullName containing Vick when called getUserInfo with no args', () => {
  const result = getUserInfo();

  expect(result.fullName).toMatch('Vick');
});
