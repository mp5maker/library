const stringCompression = (string) => {
  let counter = 1;
  let current = string[0];
  let newStr = "";
  for (let i = 1; i < string.length; i++) {
    const char = string[i];
    if (current == char) {
      counter++;
    } else if (current !== char) {
      newStr += `${current}${counter}`;
      counter = 1;
      current = char;
    }
    if (i == string.length - 1) {
      newStr += `${current}${counter}`;
    }
  }
  return newStr;
};

console.log(stringCompression("aabcccccaaa"));
