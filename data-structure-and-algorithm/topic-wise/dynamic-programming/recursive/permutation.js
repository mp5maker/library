const permutation = (str, prefix = "", arr = []) => {
  if (str.length == 0) return arr.push(prefix)
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    const newStr = str.substring(0, i) + str.substring(i + 1)
    permutation(newStr, prefix + char, arr)
  }
  return arr
};

console.log(permutation('abc'));
