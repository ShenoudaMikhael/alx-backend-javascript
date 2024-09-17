const fs = require('fs')
function countStudents(filePath) {
    if (!fs.existsSync(filePath)) {
        throw new Error('Cannot load the database')
    }
    const data = fs.readFileSync(filePath, 'utf8');
    const byLine = data.split('\n')
    const fullLine = byLine.filter(v => v.length > 0);
    const noHead = fullLine.slice(1);
    console.log(`Number of students: ${noHead.length}`);
    let csCount = 0;
    const csList = [];
    let sweCount = 0;
    const sweList = [];

    noHead.forEach(v => {
        const line = v.split(',');
        if (line[3] == 'CS') {
            csCount += 1;
            csList.push(line[0]);
        } else if (line[3] == 'SWE') {
            sweCount += 1;
            sweList.push(line[0]);
        }

    })

    console.log(`Number of students in CS: ${csCount}.List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);
}
module.exports = countStudents;