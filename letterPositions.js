const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return (console.log(`Assertion Passed: [${array1}] === [${array2}]`));
  } else {
    return (console.log(`Assertion failed: [${array1}] !== [${array2}]`));
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
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  let array = sentence.split('');
  console.log(array);
  for (const item of array) {
    if (item !== ' ') {
      results[item] = [];
    }
  }
  //console.log(results);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== ' ') {
      results[array[i]].push(i);
    }
  }
  return results;
};
console.log(letterPositions('hello'));
assertArraysEqual(letterPositions('hello')['l'],[2, 3]);