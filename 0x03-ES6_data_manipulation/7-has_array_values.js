export default function hasValuesFromArray(set, arr) {
  let res = true;
  arr.forEach(function (e) {
    if (!(set.has(e))) {
      res = false;
    }
  })
  return res;
}
