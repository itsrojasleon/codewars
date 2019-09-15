// Name
/*
  Maximum Triplet Sum (Array Series #7)
*/

// Url
/*
  https://www.codewars.com/kata/maximum-triplet-sum-array-series-number-7/train/javascript
*/

// Instructions
/*
  Given an array/list [] of n integers , find maximum triplet sum in the 
  array Without duplications .

  Notes :
  Array/list size is at least 3 .

  Array/list numbers could be a mixture of positives , negatives and zeros .

  Repetition of numbers in the array/list could occur , 
  So (duplications are not included when summing).

  Input >> Output Examples
  1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
  Explanation:
  As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

  Note : duplications are not included when summing , (i.e) the numbers 
  added only once .

  2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
  Explanation:
  As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,
  Note : duplications are not included when summing , (i.e) the numbers added 
  only once .
  3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
  Explanation:
  As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,
  Note : duplications are not included when summing , (i.e) the numbers added only once .
*/

function maxTriSum(numbers) {
  /*
  let a = numbers.sort((a, b) =>  a - b);
  return a[0] + a[1] + a[2];
  */

  let [a, b, c, ...otherNumbers] = [...new Set(numbers.sort((a, b) => b - a))];
  return a + b + c;
}

maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]);
