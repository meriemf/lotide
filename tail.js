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

// Tail function
const tail = function(array){
  let newArray = array.slice(1,array.length);
 // console.log(assertEqual(array.length,newArray.length));
// compare strings
//for (let i=0; i< newArray.length; i++)
  //{
    //assertEqual(newArray[i],"Labs");
  //}
 return newArray;
  
};
x = 12;
if(true) {
  x + 2;
  x = 4;
}
//console.log(x);
module.exports = tail;
// test code
