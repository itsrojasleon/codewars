// Name
/*
  Is there a vowel in there?
*/

// Url
/*
  https://www.codewars.com/kata/is-there-a-vowel-in-there/train
*/

// Instructions
/*
  Given an array of numbers, check if any of the numbers are the 
  character codes for lower case vowels (a, e, i, o, u).
  If they are, change the array value to a string of that vowel.
  Return the resulting array.
*/

function isVow(a) {
  const checker = ['a', 'e', 'i', 'o', 'u'];
  let newA = [];
  for (let num of a) {
    if (checker.includes(String.fromCharCode(num))) {
      newA.push(String.fromCharCode(num));
    } else {
      newA.push(num);
    }
  }
  return newA;
}
isVow([
  118,
  117,
  120,
  121,
  117,
  98,
  122,
  97,
  120,
  106,
  104,
  116,
  113,
  114,
  113,
  120,
  106
]);
