/* eslint-disable  no-underscore-dangle */
const { default: Car } = require('./10-car');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
