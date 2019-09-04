// Name
/*
  Convert a string to an array
*/

// Url
/*
  https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
*/

// Instructions
/*
  Write a function to split a string and convert it into an array of words. 
  For example:
  "Robin Singh" ==> ["Robin", "Singh"]
  "I love arrays they are my favorite" ==> [
    "I", "love", "arrays", "they", "are", "my", "favorite"
  ]
*/

function stringToArray(string) {
  return string.split(' ');
}

stringToArray('Robin Singh');
