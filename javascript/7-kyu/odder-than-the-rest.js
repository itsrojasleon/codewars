// Name
/*
  Odder Than the Rest
*/

// Url
/*
  https://www.codewars.com/kata/odder-than-the-rest/train/javascript
*/

// Instructions
/*
  Create a method that takes an array/list as an input, and outputs the 
  index at which the sole odd number is located.

  This method should work with arrays with negative numbers. 
  If there are no odd numbers in the array, then the method should output -1.
*/

// Examples
/*
  oddOne([2,4,6,7,10]) // => 3
  oddOne([2,16,98,10,13,78]) // => 4
  oddOne([4,-8,98,-12,-7,90,100]) // => 4
  oddOne([2,4,6,8]) // => -1
*/

function oddOne(arr) {
  /*
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result = i;
    }
  }
  return (result || result === 0)  ? result : -1;
  */

  return arr.findIndex(num => num % 2 !== 0);
}
// oddOne([2,16,98,10,13,78])
oddOne([-3, -24]);
