// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return (console.log(`Assertion Passed: [${array1}] === [${array2}]`));
  } else {
    return (console.log(`Assertion failed: [${array1}] !== [${array2}]`));
  }
};
const eqArrays = function(firstArray, secondArray) {
if (firstArray.length !== secondArray.length)
{
  return false;
}
else {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};
};

const takeUntil = function(array, callback) {
    let result=[];
  for(item in array)
   {
     if(callback(array[item])) {
        return result;
     }else {
       result.push(array[item]);
     }
   }
   return result;
}

//const results1 = takeUntil(data1, x => x < 0);  //[ 1, 2, 5, 7, 2 ]
//console.log(results1);
//const results2 = takeUntil(data2, x => x === ','); //[ 'I\'ve', 'been', 'to', 'Hollywood' ]
//console.log(results2);

// Test the code

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = ["and", "under", "above", "been", "to", "Redwood" ];

assertArraysEqual(takeUntil(data1, x => x < 0),[1, 2, 5, 7, 2]);
console.log('---');
assertArraysEqual(takeUntil(data2, x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
console.log('---');
assertArraysEqual(takeUntil(data3, x => x.length === 2),["and", "under", "above", "been"]);
