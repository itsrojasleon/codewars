// Name
/*
  Grasshopper - Grade book
*/

// Url
/*
  https://www.codewars.com/kata/grasshopper-grade-book/train/javascript
*/

// Instructions
/*
  Complete the function so that it finds the mean of the three scores 
  passed to it and returns the letter value associated with that grade.

  Numerical Score	Letter Grade
  90 <= score <= 100	'A'
  80 <= score < 90	'B'
  70 <= score < 80	'C'
  60 <= score < 70	'D'
  0 <= score < 60	'F'
  Tested values are all between 0 and 100. 
  Theres is no need to check for negative values or values greater than 100.
*/

function getGrade(s1, s2, s3) {
  /*
  let a = (s1+s2+s3) / 3;

  if (a >= 90 && a <= 100) {
    return 'A';
  } else if (a >= 80 && a < 90) {
    return 'B';
  } else if (a >= 70 && a < 80) {
    return 'C';
  } else if (a >= 60 && a < 70) {
    return 'D';
  } else {
    return 'F';
  }
  */

  let avg = (s1 + s2 + s3) / 3;

  if (avg >= 90 && avg <= 100) return 'A';
  else if (avg >= 80 && avg < 90) return 'B';
  else if (avg >= 70 && avg < 80) return 'C';
  else if (avg >= 60 && avg < 70) return 'D';
  else return 'F';
}
getGrade(95, 90, 93);
