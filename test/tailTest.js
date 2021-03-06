const  tail = require('../tail');
const assert = require('chai').assert;

// const  assertEqual = require('../assertEqual');

// console.log("Test a non empty array");
// console.log(tail(["Hello", "Lighthouse", "Labs"]));
// console.log("Test an empty array");
// console.log(tail([]));
// console.log("Test an array with one element");
// console.log(tail(['labs']));

// // Test Case: Check the original array length dosnt change 
// console.log("Test case original array has the same length ");
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail", () => {
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns ['Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [] for ['Labs']", () => {
    assert.deepEqual(tail(['Labs']), []);
  });
  
});
