export default function hasValuesFromArray(set, arr) {
  let res = true;
  arr.forEach((e) => {
    if (!(set.has(e))) {
      res = false;
    }
  });
  return res;
}
