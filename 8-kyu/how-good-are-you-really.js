// Url
/*
  https
*/

// Instructions
/*
  There was a test in your class and you passed it. Congratulations!
  But you're an ambitious person. You want to know if you're better than the average student in your class.
  You got an array with your colleges' points. Now calculate the average to your points!

  Return True if you're better, else False!

  Note:
  Your points are not included in the array of your classes points. For calculating the average point you may add your point to the given array!
*/

function betterThanAverage(classPoints, yourPoints) {
  /*
	let sum = 0;
  classPoints.map(p => sum += p);
	return sum / classPoints.length < yourPoints ? true : false;
	*/

  let a = classPoints.reduce((a, b) => a + b);
  return a / classPoints.length < yourPoints ? true : false;
}
betterThanAverage([2, 3], 5);
