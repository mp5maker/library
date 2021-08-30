const canConstruct = (_s, _arr) => {
  const recursive = (s, arr, memo = {}) => {
    if (memo[s]) return memo[s];
    if (s == "") return [[]];

    const result = [];

    for (let word of arr) {
      if (s.indexOf(word) == 0) {
        const remainingWord = s.slice(word.length);
        const suffixWays = recursive(remainingWord, arr, memo);
        const targetWays = suffixWays.map((item) => [word, ...item]);
        result.push(...targetWays);
      }
    }

    memo[s] = result;
    return result;
  };

  return recursive(_s, _arr);
};

console.log(
  canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
