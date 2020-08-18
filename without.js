const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return (console.log(`Assertion Passed: [${array1}] === [${array2}]`));
  } else {
    return (console.log(`Assertion failed: [${array1}] !== [${array2}]`));
  }
};
const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};
const without = function(array1, array2) {
  let result = [];
  let exist = false;
  for (let i = 0; i < array1.length; i++) {
    let j = 0;
    while ((!exist) && (j <= array2.length)) {
      if (array1[i] === array2[j]) {
        exist = true;
      }
      j = j + 1;
    }
    if (exist === false) {
      result.push(array1[i]);
    }
    exist = false;
  }
  return result;
};
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1, 2, 3], [1,2]));
console.log(assertArraysEqual(without([1,2,3],[1,2]),[3]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
