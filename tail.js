// AssertEqual Function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
  //return (console.log("Assertion Passed: ["+ actual + "] === [" + expected + "]"));
    return (console.log(`Assertion Passed: [${actual}] === [${expected}]`));
  } else {
  // return (console.log("Assertion failed: ["+ actual + "] !== [" + expected + "]"));
    return (console.log(`Assertion failed: [${actual}] !== [${expected}]`));
  }
};

// Tail function
const tail = function(array) {
  let newArray = array.slice(1,array.length);
  return newArray;
  
};

// test code
console.log("Test a non empty array");
console.log(tail(["Hello", "Lighthouse", "Labs"]));
console.log("Test an empty array");
console.log(tail([]));
console.log("Test an array with one element");
console.log(tail(['labs']));

// Test Case: Check the original array length dosnt change
console.log("Test case original array has the same length ");
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
