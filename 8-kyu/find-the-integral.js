// Name
/*
  Find the Integral
*/

// Url
/*
  https://www.codewars.com/kata/find-the-integral/train/javascript
*/

// Instructions
/*
  Create a function that finds the integral of the expression passed.

  In order to find the integral all you need to do is add one to the 
  exponent (the second number), and divide the coefficient by that new number 
  (the first number).

  In 3x^2, for example, the integral would be 1x^3 
  (we added 1 to the exponent, and divided the coefficient by that new number).

  integrate(3,2) // => "1x^3"
  integrate(12,5) // => "2x^6"
  Note that the output should be a string. 
  The coefficient is always positive, and the result will always be an integer. 
  Neither number will ever be 0.
*/

function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
}
integrate(3, 2);
