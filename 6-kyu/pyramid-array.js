// Name
/*
  Pyramid Array
*/

// Url
/*
  https://www.codewars.com/kata/pyramid-array/train/javascript
*/

// Instructions
/*
  Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

  pyramid(0) => [ ]
  pyramid(1) => [  [1]  ]
  pyramid(2) => [  [1],  [1, 1]  ]
  pyramid(3) => [  [1],  [1, 1],  [1, 1, 1]  ]
  Note: the subarrays should be filled with 1s
*/

function pyramid(n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result[i] = [];
    result[i][i] = 1;
  }

  for (let i = 0; i < result.length; i++) {
    result[i].fill(1);
  }

  return result;
}
pyramid(3);
