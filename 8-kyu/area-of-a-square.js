// Name
/*
  Area of a Square
*/

// Url
/*
  https://www.codewars.com/kata/area-of-a-square/train/javascript
*/

// Instructions
/*
  Write the function squareArea ( or square_area ) that finds the area of the red square when you have the length of the circular arc A.

  Graph

  Use π = Math.PI ( M_PI in PHP )
  Round to two decimals
*/

function squareArea(A) {
  return Number(Math.pow((2 * A) / Math.PI, 2).toFixed(2));
}
