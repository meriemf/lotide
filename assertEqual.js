// FUNCTION IMPLEMENTATION

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

// TEST CODE
assertEqual(`Lighthouse Labs`, `Bootcamp`);
assertEqual(`Bootcamp`, `Bootcamp`);
assertEqual(1, 1);
assertEqual(9, 5);

