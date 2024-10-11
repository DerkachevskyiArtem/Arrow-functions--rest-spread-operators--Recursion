'use strict';

// Task 1
const strCounter = (...param) =>
  param.filter((e) => typeof e === 'string').length;

// Task 2
const mixedArray = ['user', 12, false, 'admin', {}];

strCounter(...mixedArray);

// Task 3
function power(number, exponent) {
  if (typeof number !== 'number' || isNaN(number)) {
    throw new TypeError('number must be a number');
  }

  if (typeof exponent !== 'number' || isNaN(exponent)) {
    throw new TypeError('exponent must be a number');
  }

  if (exponent === 0) {
    return 1;
  }

  return exponent > 0
    ? number * power(number, exponent - 1)
    : 1 / (number * power(number, -exponent - 1));
}
