// Name
/*
  Shorten Me: Mad Mathematician's Algorithm III (Multiplication)
*/

// Url
/*
  https://www.codewars.com/kata/shorten-me-mad-mathematicians-algorithm-iii-multiplication/train/javascript
*/

// Instructions
/*
  Task
  You have to write a madMul(a,b) function returning a value 
  of a * b without * in your code.

  Coding Limitation:
  Less than 30 characters
  Input:
  a and b : integer ( 0-10000 )
  Note: Avoid using Math.imul()
*/

madMul=f=(a,b)=>b&&a+f(a,--b)

madMul(1, 2);
