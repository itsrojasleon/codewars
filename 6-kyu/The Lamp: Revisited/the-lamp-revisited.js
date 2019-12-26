// Name
/*
  The Lamp: Revisited
*/

// Url
/*
  https://www.codewars.com/kata/the-lamp-revisited/train/javascript
*/

// Instructions
/*
  Define a class called Lamp. It will have a string attribute for color and boolean attribute, on, that will refer to whether the lamp is on or not. Define your class constructor with a parameter for color and assign on as false on initialize.

  Give the lamp an instance method called toggleSwitch that will switch the value of the on attribute.

  Define another instance method called state that will return "The lamp is on." if it's on and "The lamp is off." otherwise.
*/

class Lamp {
  constructor(color) {
    this.color = color;
    this.on = false;
  }

  toggleSwitch() {
    this.on = !this.on;
  }

  state() {
    return `The lamp is ${this.on ? 'on.' : 'off.'}`;
  }
}
