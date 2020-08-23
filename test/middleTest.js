//const assertArraysEqual = require ('../assertArraysEqual');
const middle = require ("../middle");
const assert = require('chai').assert;

// assertArraysEqual(middle([1, 2, 3, 4]),[2,3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]); // => [3, 4]
// assertArraysEqual(middle([]),[]); // -> []
// assertArraysEqual(middle([1,2]),[]); // -> []
// assertArraysEqual(middle([1]),[]); // -> []
// assertArraysEqual(middle([1, 3, 4, 5, 6 ,7, 8, 9]),[5, 6]); // -> [5, 6]

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [1, 3, 4, 5, 6 ,7, 8, 9] for [5, 6]", () => {
    assert.deepEqual(middle([1, 3, 4, 5, 6 ,7, 8, 9]), [5, 6]);
  });
  
});