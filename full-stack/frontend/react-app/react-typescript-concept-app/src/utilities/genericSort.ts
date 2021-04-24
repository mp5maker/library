export default function genericSort<T>(a: T, b: T, property: keyof T) {
  const result = () => {
    if (a[property] > b[property]) {
      return 1;
    }
    if (a[property] < b[property]) {
      return -1;
    }
    return 0;
  };
  return result();
}
