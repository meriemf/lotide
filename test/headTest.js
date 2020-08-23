const  head = require('../head');
const  assertEqual = require('../assertEqual');


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Lighthouse", "Labs"]), "Hello");
assertEqual(5,head([5,6,7]));
assertEqual(7,head([5,6,7]));