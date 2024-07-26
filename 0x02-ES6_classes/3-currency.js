/* eslint-disable  no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    if (typeof (code) !== 'string' && !(code instanceof String)) {
      throw new TypeError('code must be string');
    }
    this._code = code;
  }

  set name(name) {
    if (typeof (name) !== 'string' && !(name instanceof String)) {
      throw new TypeError('name must be string');
    }
    this._name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
