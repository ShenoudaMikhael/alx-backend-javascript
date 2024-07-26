export default class HolbertonCourse {
    constructor(name, length, students) {

        if (!(name instanceof String)) {
            throw TypeError('Name must be a string')
        }

        if (!(length instanceof Number)) {
            throw TypeError('Length must be a number')
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
        this._name = name;
    }
    set length(length) {
        this._length = length;
    }
    set students(students) {
        this._students = students;
    }

}



