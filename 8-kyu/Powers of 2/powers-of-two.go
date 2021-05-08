package main

import (
	"math"
)

func main() {
	powersOfTwo(2)
}

func powersOfTwo(n int) []int {
	s := []int{}

	for i := 0; i <= n; i++ {
		s = append(s, int(math.Pow(2, float64(i))))
	}

	return s
}
