// Name
/*
  Is Integer Array ?
*/

// Url
/*
  https://www.codewars.com/kata/is-integer-array/train/javascript
*/

// Instructions
/*
  Write a function isIntArray with the below signature.

  function isIntArray(arr) {
      return true;
  }
    *  returns *true* if every element in an array is an integer or a float with no decimals. </br>
    * returns *true* if array is empty.
    * returns *false* for every other input.
*/

function isIntArray(arr) {
  // if (!arr) return false;
  // if (arr.length === 0) return true;

  // let result = [];

  // for (let element of arr) {
  //   if (typeof element === 'number' && Math.floor === element) {
  //     result.push(element);
  //   }
  // }
  // return result.length === arr.length;

  return Array.isArray(arr) && arr.every(num => Math.floor(num) === num);
}
