// Name
/*
  Surface Area and Volume of a Box
*/

// Url
/*
  https://www.codewars.com/kata/surface-area-and-volume-of-a-box/train/javascript
*/

// Instructions
/*
  Write a function that returns the total surface area and volume of a box as 
  an array: [area, volume]
*/

function getSize(width, height, depth) {
  return [
    2 * (width * height) + 2 * (width * depth) + 2 * (height * depth),
    width * height * depth
  ];
}
getSize(4, 2, 6);
