// Name
/*
  Sort Arrays (Ignoring Case)
*/

// Url
/*
  https://www.codewars.com/kata/sort-arrays-ignoring-case/train/javascript
*/

// Instructions
/*
  Sort the given strings in alphabetical order, case insensitive. For example:

  ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
  ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/

const sortme = function(names) {
  return names.sort(function(a, b) {
    let charA = a.toUpperCase();
    let charB = b.toUpperCase();
    if (charA < charB) {
      return -1;
    }
    if (charA > charB) {
      return 1;
    }
    return 0;
  });
};
