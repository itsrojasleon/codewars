// Name
/*
  Find Nearest square number
*/

// Url
/*
  https://www.codewars.com/kata/find-nearest-square-number/train/javascript
*/

// Instructions
/*
  Your task is to find the nearest square number, 
  nearest_sq(n), of a positive integer n.
  Goodluck :)
*/

function nearestSq(n) {
  // Complicated
  /*
  let first;
  let df;
  let second;
  let ds;
  for (let i = n; i >= 1; i--) {
    if (Number.isInteger(Math.sqrt(i))) {
      df = n - i;
      first = i;
      break;
    }
  }
  for (let i = n; i <= 10000000; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      ds = i - n;
      second = i;
      break;
    }
  }

  if (df < ds) {
    return first;
  } else {
    return second;
  }
  */

  // Fancy way (2)
  // return Math.pow(Math.round(Math.sqrt(10)), 2)
  return Math.round(n ** 0.5) ** 2;
}
nearestSq(10);
