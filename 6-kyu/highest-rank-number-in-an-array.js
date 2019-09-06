// Name
/*
  Highest Rank Number in an Array
*/

// Url
/*
  https://www.codewars.com/kata/highest-rank-number-in-an-array/train/javascript
*/

// Instructions
/*
  Write a method highestRank(arr) (or highest-rank in clojure) 
  which returns the number which is most frequent in the given 
  input array (or ISeq). If there is a tie for most frequent number, 
  return the largest number of which is most frequent.

  Example:

  arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
  highestRank(arr) //=> returns 12

  arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
  highestRank(arr) //=> returns 12

  arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
  highestRank(arr) //=> returns 3
*/

function highestRank(arr) {
  let max = 0;
  let charMap = {};
  let maxNum;

  for (let num of arr) {
    charMap[num] = charMap[num] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] >= max) {
      max = charMap[char];
      maxNum = Number(char);
    }
  }

  return maxNum;
}
highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]);
