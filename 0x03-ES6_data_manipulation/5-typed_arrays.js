export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new Error('Position outside range');

  const q = new Int8Array(length);
  q[position] = value;
  return new DataView(q.buffer);
}
