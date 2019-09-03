// Name
/*
  Not above the one!
*/

// Url
/*
  https://www.codewars.com/kata/not-above-the-one/train/javascript
*/

// Instructions
/*
  Write an algorithm to remove all the numbers above 1 from the given array.

  Just in case we want to make any changes, create an array of 
  the indexes of the removed numbers.

  Return a nested array or a tuple:

  the first array being only the 1s and 0s
  the second array being the indexes of the removed numbers
  [ 0, 1, 2, 1, 5, 6, 2, 1, 1, 0 ]
  should return

  [ [ 0, 1, 1, 1, 1, 0 ], [ 2, 4, 5, 6 ] ]
  Please upvote and enjoy!
*/

function binaryCleaner(arr) {
  /*
  // Cool but a little bit large

  let binary = [];
  let indexes = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 1) {
      binary.push(arr[i]);
    } else {
      indexes.push(i);
    }
  }
  return [binary, indexes]
  */

  return [
    arr.filter(n => n <= 1),
    arr.map((n, i) => i).filter((n, i) => arr[i] > 1)
  ];
}
binaryCleaner([0, 1, 2, 1, 0, 2, 1, 1, 1, 0, 4, 5, 6, 2, 1, 1, 0]);
