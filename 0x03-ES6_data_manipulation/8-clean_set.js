export default function cleanSet(set, startString) {
  if (startString === '') return '';

  let q = '';

  set.forEach((e) => {
    if (e.split(startString).length > 1) {
      q = q + (q.length > 0 ? '-' : '') + e.split(startString)[1];
    }
  });
  return q;
}
