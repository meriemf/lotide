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
const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
  }
};
const eqObjects = function(object1, object2) {
  let size1 = Object.keys(object1).length;
  let size2 = Object.keys(object2).length;
  if (size1 !== size2) {
    return false;
  } else {
    for (let item in object1) {
      if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        return eqArrays(object1[item], object2[item]);
      }
      if (object1[item] !== object2[item]) {
        return false;
      }
    }
    return true;
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(ab, ba),eqObjects(ab, abc)); // (true, false)
assertEqual(eqObjects(cd, dc),eqObjects(cd, cd2)); // (true, false)
assertEqual(eqObjects(ab, ba),eqObjects(cd, cd2)); // (true, false)