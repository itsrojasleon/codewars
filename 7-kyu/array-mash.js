// Name
/*
  Array Mash
*/

// Url
/*
  https://www.codewars.com/kata/array-mash/train/javascript
*/

// Instructions
/*
  Mash 2 arrays together so that the returning array has alternating 
  elements of the 2 arrays . Both arrays will always be the same length.

  eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
*/

function arrayMash(array1, array2) {
  /*
  // Cool and large

  let finalArray = [];

  for (let i = 0, j = 0; i < array1.length; i++, j += 2) {
    finalArray[j] = array1[i];
  }
  for (let i = 0, j = 1; i < array1.length; i++, j += 2) {
    finalArray[j] = array2[i];
  }
  return finalArray;
  */

  // Cool
  let finalArray = [];

  for (let i = 0; i < array1.length; i++) {
    finalArray.push(array1[i], array2[i]);
  }

  return finalArray;
}
arrayMash([1, 2, 3], ['a', 'b', 'c']);
