const add = function(a, b) {
		return  a+b;
};

const subtract = function(a, b) {
		return a-b;
};

const sum = function(arr) {
	//const arr = Array.from(arguments);
	let ans = arr.reduce((acc, ele)=> {return acc+(+ele)}, 0);
	return ans;
};

const multiply = function(arr) {
	//const arr = Array.from(arguments);
	let ans = arr.reduce((acc, ele)=> {return acc*(+ele)}, 1);
	return ans;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	let n = 1;
	for (let i=1; i<=a; i++)
		n *= i;
	return n;
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
