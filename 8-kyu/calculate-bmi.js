// Name
/*
  Calculate BMI
*/

// Url
/*
  https://www.codewars.com/kata/calculate-bmi/train/javascript
*/

// Instructions
/*
  Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

  if bmi <= 18.5 return "Underweight"

  if bmi <= 25.0 return "Normal"

  if bmi <= 30.0 return "Overweight"

  if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
  let op = weight / Math.pow(height, 2);
  return op <= 18.5
    ? 'Underweight'
    : op <= 25.0
    ? 'Normal'
    : op <= 30.0
    ? 'Overweight'
    : 'Obese';
}
