// Name
/*
  Get Nth Even Number
*/

// Url
/*
  https://www.codewars.com/kata/get-nth-even-number/train/javascript
*/

// Instructions
/*
  Return the Nth Even Number

  nthEven(1) //=> 0, the first even number is 0
  nthEven(3) //=> 4, the 3rd even number is 4 (0, 2, 4)

  nthEven(100) //=> 198
  nthEven(1298734) //=> 2597466
  The input will not be 0.
*/

function nthEven(n) {
  return (n - 1) * 2;
}

nthEven(1298734);
