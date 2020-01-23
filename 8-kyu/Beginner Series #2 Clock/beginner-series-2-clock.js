// Name
/*
  Beginner Series #2 Clock
*/
// Url
/*
  https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
*/
// Instructions
/*
  Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

  Your task is to make 'Past' function which returns time converted to miliseconds.

  #####Example:

  past(0, 1, 1) == 61000
  Note! h, m and s will be only Natural numbers! Waiting for translations and Feedback! Thanks!
*/

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}
