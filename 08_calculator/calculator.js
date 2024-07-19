const add = function(numA, numB) {
	return numA + numB;
};

const subtract = function(numA, numB) {
	return numA - numB;
};

const sum = function(arr) {
	return arr.reduce((acc, num) => { return acc + num }, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, num) => { return acc*num }, 1)
};

const power = function(num, exp) {
	return Math.pow(num, exp)
};

const factorial = function(num) {
  let result = 1
	for (let i = 1; i <= num; i++) {
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
