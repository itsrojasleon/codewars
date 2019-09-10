// Name
/*
  Two Sum
*/

// Url
/*
  https://www.codewars.com/kata/two-sum/train/javascript
*/

// Instructions
/*
  Write a function that takes an array of numbers (integers for the tests) 
  and a target number. It should find two different items in the array that, 
  when added together, give the target value. 
  The indices of these items should then be returned in a tuple like so: 
  (index1, index2).

  For the purposes of this kata, some tests may have multiple answers; 
  any valid solutions will be accepted.

  The input will always be valid (numbers will be an array of length 2 or greater, 
    and all of the items will be numbers; 
    target will always be the sum of two different items from that array).

  Based on: http://oj.leetcode.com/problems/two-sum/

  twoSum [1, 2, 3] 4 === (0, 2)
*/

function twoSum(numbers, target) {
  let index = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        index.push(i, j);
      }
    }
  }
  return index;
}
twoSum([1, 2, 3], 4);
