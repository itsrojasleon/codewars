// Name
/*
  Find the middle element
*/

// Url
/*
  https://www.codewars.com/kata/find-the-middle-element/train/javascript
*/

// Instructions
/*
  As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

  The input to the function will be an array of three distinct numbers (Haskell: a tuple).

  For example:

  gimme([2, 3, 1]) => 0
  2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

  Another example (just to make sure it is clear):

  gimme([5, 10, 14]) => 1
  10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

var gimme = function(inputArray) {
  /*
  let min = Math.min(...inputArray);
  let max = Math.max(...inputArray);

  let result;
  inputArray.map((n, i) => {
    if (n !== min && n !== max) result = i;
  });
  return result;
  */

  return inputArray.indexOf([...inputArray].sort((a, b) => a - b)[1]);
};
