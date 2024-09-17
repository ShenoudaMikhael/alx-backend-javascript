import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(dataPath).then((v) => {
      const fl = ['This is the list of our students'];
      Object.keys(v).forEach((k) => {
        fl.push(`Number of students in ${k}: ${v[k].length}. List: ${v[k].join(', ')}`);
      });
      response.status(200).send(fl.join('\n'));
    }).catch((e) => {
      console.log(e);
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;
    const majors = ['CS', 'SWE'];
    if (!majors.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(dataPath)
      .then((v) => {
        let responseText = '';

        if (Object.keys(v).includes(major)) {
          const group = v[major];
          responseText = `List: ${group.join(', ')}`;
        }
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
