// Name
/*
  Is it a palindrome?
*/

// Url
/*
  https://www.codewars.com/kata/is-it-a-palindrome/train/javascript
*/

// Instructions
/*
  Write function isPalindrome that checks if a given string 
  (case insensitive) is a palindrome.

  In Racket, the function is called palindrome?

  (palindrome? "nope") ; returns #f
  (palindrome? "Yay")  ; returns #t
*/

function isPalindrome(x) {
  return (
    x.toLowerCase() ===
    [...x]
      .reverse()
      .join('')
      .toLowerCase()
  );
}
isPalindrome('Abba');
