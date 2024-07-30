export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || !set || !(set instanceof Set)) return "";
  let q = [];

  set.forEach((e) => {
    if (typeof e === 'string' && e.startsWith(startString)) {
      q.push(e.slice(startString.length));
    }
  });
  return q.join('-')
}
