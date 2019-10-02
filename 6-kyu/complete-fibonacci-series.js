// Name
/*
  Complete Fibonacci Series
*/

// Url
/*
  https://www.codewars.com/kata/complete-fibonacci-series/train/javascript
*/

// Instructions
/*
  The function 'fibonacci' should return an array of fibonacci numbers. 
  The function takes a number as an argument to decide how many no. 
  of elements to produce. If the argument is less than or equal to 0 then 
  return empty array

  Example:

  fibonacci(4); // should return [0,1,1,2]
  fibonacci(-1); // should return []
*/

function fibonacci(n) {
  if (n <= 0 || !n) {
    return [];
  }
  let result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }
  // remove last element in the array
  result.pop();
  return result;
}
fibonacci(5);
