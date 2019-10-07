// Name
/*
  Check the exam
*/

// Url
/*
  https://www.codewars.com/kata/check-the-exam/train/javascript
*/

// Instructions
/*
  The first input array contains the correct answers to an exam, 
  like ["a", "a", "b", "d"]. The second one is "answers" array and contains 
  student's answers.

  The two arrays are not empty and are the same length. 
  Return the score for this array of answers, giving +4 for each correct 
  answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).

  If the score < 0, return 0.

  For example:

  checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
  checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
  checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
  checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/

function checkExam(array1, array2) {
  let result = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      result += 4;
    } else if (array1[i] !== array2[i] && array2[i] !== '') {
      result--;
    }
  }
  return result < 0 ? 0 : result;
}
checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']);
