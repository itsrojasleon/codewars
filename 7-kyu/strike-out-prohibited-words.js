// Name
/*
  Strike out prohibited words
*/

// Url
/*
  https://www.codewars.com/kata/strike-out-prohibited-words/train/javascript
*/

// Instructions
/*
  You have to work in a serious online newspaper, 
  but all the journalists write articles with prohibited words in it. 
  You are sick and tired of removing them manually, 
  so you decide to write some software to strike them out for you.

  You get a string and output the same string but with all the unwanted 
  words striked out with asterisks (*).

  The prohibited words are: cats, call, code, cola, and cool. 
  Save your business by blocking them altogether.

  Your sophisticated software should also be case-insensitive.

  Example:

  Input:

  Today I will tell you how my CATS write all the code for me.

  Output:

  Today I will tell you how my **** write all the **** for me.
*/

function strikeOut(input) {
  return input.replace(/cats|call|code|cola|cool/gi, '****');
}
strikeOut('Today I will tell you how my CATS write all the code for me');
