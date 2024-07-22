export default function createIteratorObject(report) {
    let myArray = []
    for (const iterator of Object.keys(report.allEmployees)) {
        myArray.push(...report.allEmployees[iterator])
    }
    return myArray;
}
