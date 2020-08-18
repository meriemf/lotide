const assertEqual = function(actual, expected) {
  const emojis = require('node-emoji');
  if (actual === expected) {
    //return (console.log("Assertion Passed: ["+ actual + "] === [" + expected + "]"));
    return (console.log(`${emojis.random().emoji} Assertion Passed: [${actual}] === [${expected}]`));
  } else {
    // return (console.log("Assertion failed: ["+ actual + "] !== [" + expected + "]"));
    return (console.log(`${emojis.random().emoji} Assertion failed: [${actual}] !== [${expected}]`));
  }
};

const eqArrays = function(firstArray, secondArray) {
//let result = true;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(eqArrays(["1", "2", "3"], [])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


