/* eslint-disable  no-underscore-dangle */
export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  set code(code) {
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
