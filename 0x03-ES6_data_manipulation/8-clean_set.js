export default function cleanSet(set, startString) {
  if (startString === '') return '';

  let q = '';

  set.forEach((e) => {
    if (e.startsWith(startString)) {
      q = q + (q.length > 0 ? '-' : '') + e.substring( startString.length);
    }
  });
  return q;
}
