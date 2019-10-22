// Name
/*
  The Clockwise Spiral
*/

// Url
/*
  https://www.codewars.com/kata/the-clockwise-spiral/train/javascript
*/

// Instructions
/*
  Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.

  Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two-dimensional array with numbers 1 through NxN represented as a clockwise spiral.

  Return an empty array if N < 1 or N is not int / number

  Examples:

  N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]

  1    2    3    
  8    9    4    
  7    6    5    
  N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]

  1   2   3   4
  12  13  14  5
  11  16  15  6
  10  9   8   7
  N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]

  1   2   3   4   5    
  16  17  18  19  6    
  15  24  25  20  7    
  14  23  22  21  8    
  13  12  11  10  9
*/

function createSpiral(N) {
  const results = [];
  for (let i = 0; i < N; i++) {
    results.push([]);
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = N - 1;
  let startRow = 0;
  let endRow = N - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}
