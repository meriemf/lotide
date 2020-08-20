const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return (console.log(`Assertion Passed: [${array1}] === [${array2}]`));
  } else {
    return (console.log(`Assertion failed: [${array1}] !== [${array2}]`));
  }
};
const eqArrays = function(firstArray, secondArray) {
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
};
};
const map = function(array,callback)
{   const results = [];
  for (item of array)
    results.push(callback(item));
    console.log(results);
    return results;
}
const words = ["ground", "control", "to", "major", "tom"];
const results = map(words, word => word[0]);

// Test the code
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map(words, word => word[word.length-1]), ['d', 'l', 'o', 'r', 'm']);

