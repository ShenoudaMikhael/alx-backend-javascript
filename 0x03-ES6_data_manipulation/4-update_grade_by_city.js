export default function updateStudentGradeByCity(studdents, city, grades) {
  return studdents.filter((s) => s.location === city).map(
    (e) => (
      {
        ...e,
        grade: (grades.filter((g) => g.studentId === e.id)).length === 1 ? grades.filter((g) => g.studentId === e.id)[0].grade : 'N/A',
      }
    ),
  );
}
