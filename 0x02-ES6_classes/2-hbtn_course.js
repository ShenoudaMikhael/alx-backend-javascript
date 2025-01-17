/* eslint-disable  no-underscore-dangle */

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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
    if ((typeof name !== 'string') && !(name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  set length(length) {
    if ((typeof length !== 'number') && !(length instanceof Number)) {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  set students(students) {
    if (!(students instanceof Array) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._students = students;
  }
}
