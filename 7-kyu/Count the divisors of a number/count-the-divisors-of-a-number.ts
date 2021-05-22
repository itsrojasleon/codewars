// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/go
// Count the divisors of a number

export function divisors(n: number) {
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    counter += n % i === 0 ? 1 : 0;
  }

  return counter;
}
