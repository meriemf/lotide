// const assertEqual = function(actual, expected) {
//   const emojis = require('node-emoji');
//   if (actual === expected) {
//     //return (console.log("Assertion Passed: ["+ actual + "] === [" + expected + "]"));
//     return (console.log(`${emojis.random().emoji} Assertion Passed: [${actual}] === [${expected}]`));
//   } else {
//     // return (console.log("Assertion failed: ["+ actual + "] !== [" + expected + "]"));
//     return (console.log(`${emojis.random().emoji} Assertion failed: [${actual}] !== [${expected}]`));
//   }
// };

const eqArrays = function(firstArray, secondArray) {
//let result = true;
if (firstArray.length !== secondArray.length)
  {
    return false;
  }
else {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
}
};  

module.exports = eqArrays;


