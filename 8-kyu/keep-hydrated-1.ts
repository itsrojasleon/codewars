// Name
/*
  Keep Hydrated!
*/

// Url
/*
  https://www.codewars.com/kata/keep-hydrated-1/train/typescript
*/

// Instructions
/*
  Nathan loves cycling.

  Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres 
  of water per hour of cycling.

  You get given the time in hours and you need to return the number of litres 
  Nathan will drink, rounded to the smallest value.

  For example:

  time = 3 ----> litres = 1

  time = 6.7---> litres = 3

  time = 11.8--> litres = 5
*/

export function litres(time: number): number {
  return Math.floor(time / 2);
}
litres(2);
