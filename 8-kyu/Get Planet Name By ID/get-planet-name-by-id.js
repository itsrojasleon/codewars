// Get Planet Name By ID
// https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript

// The function is not returning the correct values. Can you figure out why?
// getPlanetName(3); // should return 'Earth'

function getPlanetName(id) {
  let name;
  switch (id) {
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
  }

  return name;
}
