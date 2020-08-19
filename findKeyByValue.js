
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

const findKeyByValue = function(object, value) {
  let result = 0;
  for (let item in object) {
    if (object[item] === value)
    { result = item; 
    }
    else {
      result = undefined;
    }
  }
  return result;
};
// test

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, " "), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Exp"), "sci_fi");


