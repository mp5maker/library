const findAllPermutation = (str) => {
  const recursive = (str) => {
    if (str.length == 1) return str;

    let permutationArr = [];
    for (let i = 0; i < str.length; i++) {
      const current = str[i];
      const remaining = str.substring(0, i) + str.slice(i + 1);
      const allPermutation = findAllPermutation(remaining);
      for (let permutation of allPermutation) permutationArr.push(current + permutation);
    }

    return permutationArr;
  };

  return recursive(str);
};

console.log(findAllPermutation("abc"));
