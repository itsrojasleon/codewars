// Name
/*
  You only need one - Beginner
*/

// Url
/*
  https://www.codewars.com/kata/you-only-need-one-beginner/train/javascript
*/

// Instructions
/*
  You will be given an array a and a value x. 
  All you need to do is check whether the provided array contains the value.

  Array can contain numbers or strings. X can be either.

  Return true if the array contains the value, false if not.
*/

function check(a, x) {
  a.includes(x);
}
check([0, 101], 0);
