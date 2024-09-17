const fs = require('fs');

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const byLine = data.split('\n');
      const fullLine = byLine.filter((v) => v.length > 0);
      const noHead = fullLine.slice(1);
      console.log(`Number of students: ${noHead.length}`);
      const q = {};

      noHead.forEach((v) => {
        const line = v.split(',');
        if (Object.keys(q).includes(line[3])) {
          q[line[3]].push(line[0]);
        } else {
          q[line[3]] = [line[0]];
        }
      });
      Object.keys(q).forEach((k) => {
        console.log(`Number of students in ${k}: ${q[k].length}. List: ${q[k].join(', ')}`);
      });
      resolve(true);
    }
  });
});

module.exports = countStudents;
