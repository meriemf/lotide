//const eqArrays = require("./eqArrays");

// const eqArrays = function(firstArray, secondArray) {
//   //let result = true;
//   for (let i = 0; i < firstArray.length; i++) {
//     if (firstArray[i] !== secondArray[i]) {
//       return false;
//     }
//   }
//   return true;
// };
// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     return (console.log(`Assertion Passed: [${array1}] === [${array2}]`));
//   } else {
//     return (console.log(`Assertion failed: [${array1}] !== [${array2}]`));
//   }
// };
const middle = function(array) {
  let result = [];
  let index = 0;
  let size = array.length;
  if (size <= 2) {
    result = [];
  } else {
    if (size % 2 === 0) { // even number [1, 2, 3, 4] -> [2,3]
      index = (size / 2) - 1;
      result[0] = array [index];
      result[1] = (array [index + 1]);
    } else { // odd number [1, 2, 3, 4, 5] -> [3]
      index = Math.trunc(size / 2);
      result[0] = array[index];
    }
  }
  return (result);
};
module.exports = middle;
