// Name
/*
	Sum of positive
*/

// Url
/*
  https://www.codewars.com/kata/sum-of-positive/train/javascript
*/

// Instructions
/*
  You get an array of numbers, return the sum of all of the positives ones.

  Example [1,-4,7,12] => 1 + 7 + 12 = 20

  Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
  /*
	let sum = 0;

	for (let num of arr) {
		if (num > 0) {
			sum += num;
		}
	}
	return sum;
	*/

  return arr.filter(n => n > 0).reduce((a, b) => a + b);
}
positiveSum([1, 2, 3, 4, 5]);
