// Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/go

package kata

func Multiple3And5(number int) int {
	sum := 0
	for i := 0; i < number; i++ {
		if i%3 == 0 || i%5 == 0 {
			sum += i
		}
	}
	return sum
}
