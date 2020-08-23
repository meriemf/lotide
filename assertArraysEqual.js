const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return (console.log(`Assertion Passed: [${array1}] === [${array2}]`));
  } else {
    return (console.log(`Assertion failed: [${array1}] !== [${array2}]`));
  }
};
// const eqArrays = function(firstArray, secondArray) {
// if (firstArray.length !== secondArray.length)
// {
//   return false;
// }
// else {
//   for (let i = 0; i < firstArray.length; i++) {
//     if (firstArray[i] !== secondArray[i]) {
//       return false;
//     }
//   }
//   return true;
// };
// };

module.exports = assertArraysEqual;





