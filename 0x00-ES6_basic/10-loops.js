export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const x of array) {
    let value = x;
    arr.push(appendString + value);
  }

  return arr;
}
