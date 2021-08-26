function count(_n) {
  let memo = {};
  let combinations = []
  let comboDict = {}

  const checkPush = (arr) => {
    const newStr = arr.sort((a, b) => a - b).join(',')
    if (combinations.includes(newStr)) return 0
    combinations.push(newStr)
    return 1
  }

  const recursive = (n, combo = []) => {
    if (n == 0) {
      combo = []
      return checkPush(combo);
    }
    if (n < 0) return 0;
    if (memo[n]) {
      if (comboDict[n]["3"]) checkPush([...combo, ...comboDict[n]["3"]]);
      if (comboDict[n]["5"]) checkPush([...combo, ...comboDict[n]["5"]]);
      if (comboDict[n]["10"]) checkPush([...combo, ...comboDict[n]["10"]]);
      combo = []
      return memo[n];
    };
    const take3 = recursive(n - 3, [...combo, 3]);
    const take5 = recursive(n - 5, [...combo, 5]);
    const take10 = recursive(n - 10, [...combo, 10])
    memo[n] = take3 + take5 + take10
    comboDict[n] = {
      ...(take3 ? { "3": [...combo, 3]} : {}),
      ...(take5 ? { "5": [...combo, 5]} : {}),
      ...(take10 ? { "10": [...combo, 10]} : {}),
    }
    return memo[n];
  };

  recursive(_n)
  return combinations.length;
}

console.log(count(20));
