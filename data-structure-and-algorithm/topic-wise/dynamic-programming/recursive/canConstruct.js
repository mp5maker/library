const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const isConstructed = canConstruct(
        target.substring(word.length),
        wordBank,
        memo
      );
      memo[target] = true;
      if (isConstructed) return true;
    }
  }

  memo[target] = false;
  return false;
};

console.log(
  canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
); // true
console.log(
  canConstruct("abcdef", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false