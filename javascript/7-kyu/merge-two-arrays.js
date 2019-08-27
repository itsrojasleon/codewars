// Name
/*
  Merge two arrays
*/

// Url
/*
  https://www.codewars.com/kata/merge-two-arrays/train/javascript
*/

// Instructions
/*
  Write a function that combines two arrays by alternatingly 
  taking elements from each array in turn.
*/

// Examples
/*
  [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
  [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
*/

function mergeArrays(a, b) {
  return Array.from({ length: Math.max(a.length, b.length) }).flatMap(
    (_, index) => {
      if (a[index] && b[index]) return [a[index], b[index]];
      if (a[index]) return a[index];
      if (b[index]) return b[index];
    }
  );
}
mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']);
