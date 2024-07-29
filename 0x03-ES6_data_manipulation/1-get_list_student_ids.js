export default function getListStudentIds(arr) {
  if (arr instanceof Array) {
    return arr.map((e) => e.id);
  }
  return [];
}
