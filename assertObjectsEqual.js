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
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    return (console.log(`✅✅✅Assertion Passed: [${inspect(object1)}] === [${inspect(object2)}]`));
  } else {
    return (console.log(`🛑🛑🛑Assertion failed: [${inspect(object1)}] !== [${inspect(object2)}]`));
  }
};
assertObjectsEqual({l:'1', h:'2', b:'r'},{l:'1', h:'2', b:'r'});
assertObjectsEqual({l:'1', h:'2', b:'r'},{l:'1', h:'2'});
assertObjectsEqual({l:'1', h:'2', b:'r'},{l:'1', h:'2', b:'t'});
assertObjectsEqual({l:'1', h:'2'},{l:'1', h:'2', b:'r'});
assertObjectsEqual({l:'4', h:'2', b:'r'},{l:'1', h:'2', b:'r'});
assertObjectsEqual({l:'a', h:['v','t'], b:'t'},{l:'a', h:['v','t'], b:'t'});
assertObjectsEqual({l:'a', h:['v','t'], b:'t'},{l:'a', h:['y','t'], b:'t'});




