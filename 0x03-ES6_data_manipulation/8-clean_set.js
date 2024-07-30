export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || !set || !(set instanceof Set)) return '';
  const arr = [];

  set.forEach((e) => {
    if (typeof e === 'string' && e.startsWith(startString)) {
      arr.push(e.slice(startString.length));
    }
  });
  return arr.join('-');
}
