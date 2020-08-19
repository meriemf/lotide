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
const countLetters = function(sentence) {
  const result = {};
  let array = sentence.split('');
  for (const item of array) {
    if (item !== ' ') {
      result[item] = 0;
    }
  }
  for (const item of array) {
    if (item !== ' ') {
      result[item] += 1;
    }
  }
  return result;

};
let count = countLetters('lighthouse lab');
console.log(count);
assertEqual(count['l'],2);
assertEqual(count['i'],1);
assertEqual(count['g'],1);
assertEqual(count['h'],2);
assertEqual(count['t'],1);
assertEqual(count['o'],1);
assertEqual(count['u'],1);
assertEqual(count['s'],1);
assertEqual(count['e'],1);
assertEqual(count['b'],1);
assertEqual(count['a'],1);






//console.log(countLetters('lhytrg'));
//console.log(countLetters(''));
  