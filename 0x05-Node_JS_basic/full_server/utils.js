const fs = require('fs');

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    console.log('here');
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log('here2');

      reject(new Error('Cannot load the database'));
    }
    if (data) {
      let j = '';
      const byLine = data.split('\n');
      const fullLine = byLine.filter((v) => v.length > 0);
      const noHead = fullLine.slice(1);
      //   console.log(`Number of students: ${noHead.length}`);
      j = [`Number of students: ${noHead.length}`];
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
        // console.log(`Number of students in ${k}: ${q[k].length}. List: ${q[k].join(', ')}`);
        j.push(`Number of students in ${k}: ${q[k].length}. List: ${q[k].join(', ')}`);
      });
      resolve(q);
    }
  });
});

export default readDatabase;
module.exports = readDatabase;
