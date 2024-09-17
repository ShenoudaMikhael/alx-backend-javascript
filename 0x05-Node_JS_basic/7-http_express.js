const express = require('express');
const fs = require('fs');

const FIE_PATH = process.argv.length > 2 ? process.argv[2] : '';
const countStudents = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
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
      resolve(j);
    }
  });
});
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  let dbInfo = 'This is the list of our students\n';
  await countStudents(FIE_PATH)
    .then((msg) => {
      dbInfo += msg.join('\n');
      res.send(dbInfo);

      res.end(dbInfo);
    })
    .catch((err) => {
      dbInfo += err.message;
      res.send(dbInfo);
    });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports = app;
