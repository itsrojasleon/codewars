// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/go
// Count the divisors of a number

package main

func main() {
	Divisors(10)
}

func Divisors(n int) int {
	var counter = 0

	for i := 1; i <= n; i++ {
		if n%i == 0 {
			counter++
		}
	}

	return counter
}
