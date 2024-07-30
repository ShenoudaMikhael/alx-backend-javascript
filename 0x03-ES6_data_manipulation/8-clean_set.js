export default function cleanSet(set, startString) {
  if (!startString) return "";
  let q = [];

  set.forEach((e) => {
    if (e.startsWith(startString)) {
      q.push(e.slice(startString.length));
    }
  });
  return q.join('-')
}
