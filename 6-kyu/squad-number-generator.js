// Name
/*
  Squad number generator
*/

// Url
/*
  https://www.codewars.com/kata/squad-number-generator/train/javascript
*/

// Instructions
/*
  At the start of each season, every player in a football team is assigned their 
  own unique squad number. Due to superstition or their history certain numbers 
  are more desirable than others.

  Write a function generateNumber() that takes two arguments, an array of the 
  current squad numbers (squad) and the new player's desired number (n). 
  If the new player's desired number is not already taken, return n, 
  else if the desired number can be formed by adding two digits between 1 and 9, 
  return the number formed by joining these two digits together. 
  E.g. If 2 is taken, return 11 because 1 + 1 = 2. Otherwise return null.

  Note: Often there will be several different ways to form a replacement number. 
  In these cases the number with lowest first digit should be given priority. E.g. 
  If n = 15, but arr already contains 15, return 69, not 78.
*/

function generateNumber(arr, n) {
  let a = arr.find(num => num === n);
  if (!a) return n;
  else 
    let values = [];
    let cool = null;

    for (let i = 1; i <= 9; i++) {
      for (let j = 9; j >= 1; j--) {
        if (i + j === n) {
          values.push(parseInt(`${i}${j}`));
        }
      }
    }

    for (let i = 0; i < values.length; i++) {
      if (!arr.includes(values[i])) {
        cool = values[i];
        break;
      }
    }
    return cool;
  }
generateNumber([1, 2, 3, 4, 6, 9, 10, 11, 15, 29, 69], 11);
generateNumber(
  [1, 2, 3, 4, 6, 9, 10, 11, 15, 29, 38, 47, 56, 65, 69, 74, 83, 92],
  11
);
