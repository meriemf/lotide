const assertArraysEqual = require('../assertArraysEqual');
//const eqArrays = require('../eqArrays');


assertArraysEqual(["1","2","3"],["1","2","3"]);
assertArraysEqual(["1","2","5"],["1","2","3"]);
assertArraysEqual(["1","2","3"],["1","2"]);
assertArraysEqual(["1","2","3"],[]);
