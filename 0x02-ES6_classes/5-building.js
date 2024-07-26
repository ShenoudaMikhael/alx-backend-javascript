/* eslint-disable  no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !Object.getOwnPropertyNames(this.constructor).find('evacuationWarningMessage')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof (sqft) !== 'number' && !(sqft instanceof Number)) {
      throw new TypeError('sqft must be Number');
    }
    this._sqft = sqft;
  }
}
