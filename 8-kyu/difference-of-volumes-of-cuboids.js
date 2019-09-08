// Name
/*
  Difference of Volumes of Cuboids
*/

// Url
/*
  https://www.codewars.com/kata/difference-of-volumes-of-cuboids/train/javascript
*/

// Instructions
/*
  In this simple exercise, you will create a program that will take two 
  lists of integers, a and b. Each list will consist of 3 positive 
  integers above 0, representing the dimensions of cuboids a and b. 
  You must find the difference of the cuboids' 
  volumes regardless of which is bigger.

  For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), 
  the volume of a is 12 and the volume of b is 20. 
  Therefore, the function should return 8.

  Your function will be tested with pre-made examples as well as random ones.

  If you can, try writing it in one line of code.
*/

function findDifference(a, b) {
  /*
  let first = a.reduce((a, b) => a * b, 1);
  let second = b.reduce((a, b) => a * b, 1);

  if (first > second) {
    return first - second;
  } else {
    return second - first;
  }
  */

  return Math.abs(a.reduce((a, b) => a * b, 1) - b.reduce((a, b) => a * b, 1));
}

findDifference([3, 2, 5], [1, 4, 4]);
