/* eslint-disable  no-underscore-dangle */

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (!(name instanceof String)) {
      throw TypeError('Name must be a string');
    }

    if (!(length instanceof Number)) {
      throw TypeError('Length must be a number');
    }
    if (!(students instanceof Array)) {
      throw TypeError('Students must be a array');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (!(name instanceof String)) {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  set length(length) {
    if (!(length instanceof Number)) {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  set students(students) {
    if (!(students instanceof Array)) {
      throw TypeError('Students must be a array');
    }

    this._students = students;
  }
}
