// Name
/*
  Wilson primes
*/

//  Url
/*
  https://www.codewars.com/kata/wilson-primes/train/javascript
*/

// Instructions
/*
  Wilson primes satisfy the following condition. Let P represent a prime number.

  Then ((P-1)! + 1) / (P * P) should give a whole number.

  Your task is to create a function that returns true if the given 
  number is a Wilson prime.
*/

function amIWilson(p) {
  function fact(num) {
    if (num < 0) return -1;
    else if (num === 0) return 1;
    return num * fact(num - 1);
  }

  return Number.isInteger((fact(p - 1) + 1) / (p * p));
}
amIWilson(5);
