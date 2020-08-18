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

// Function Head

const head = function(array) {
  return array[0];
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Lighthouse", "Labs"]), "Hello");
assertEqual(5,head([5,6,7]));
assertEqual(7,head([5,6,7]));



