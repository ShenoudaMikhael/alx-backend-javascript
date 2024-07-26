/* eslint-disable  no-underscore-dangle */
export default class Car {
  constructor(brand, motor, model) {
    this.brand = brand;
    this.motor = motor;
    this.model = model;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get model() {
    return this._model;
  }

  set brand(brand) {
    this._brand = brand;
  }

  set motor(motor) {
    this._motor = motor;
  }

  set model(model) {
    this._model = model;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
