interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any,

}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
interface Directors extends Teacher {
    numberOfReports: number,
}
interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
const printTeacher = (firstName: string, lastName: string): string => `${firstName.charAt(0)}. ${lastName}`;
class StudentClass implements StudentInterface {
    public firstName: string;
    public lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string { return 'workOnHomework'; };
    displayName(): string { return `${this.firstName}` }
}