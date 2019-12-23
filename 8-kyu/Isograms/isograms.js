// Name
/*
  Isograms
*/

// Url
/*
  https://www.codewars.com/kata/isograms/train/javascript
*/

// Instructions
/*
  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

  isIsogram("Dermatoglyphics") == true
  isIsogram("aba") == false
  isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str) {
  let charMap = {};
  let result = true;

  for (let char of str.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let n in charMap) {
    if (charMap[n] > 1) {
      result = false;
      break;
    }
  }

  return result;
}

isIsogram('Dermatoglyphics'); //  === true;
