function count(_n) {
  let combos = [];
  let dict = {};
  let comboDict = {};
  const recursive = (n, combo) => {
    if (n < 0) return 0;
    if (n === 0) {
      const arrange = combo.sort((a, b) => a - b).join(",");
      if (!combos.includes(arrange)) {
        combos.push(arrange);
        return 1;
      }
      return 0;
    }
    if (dict[n]) {
      const red = comboDict[n].reduce((newArr, item) => {
        const arrange = item.sort((a, b) => a - b).join(",");
        if (!combos.includes(arrange)) {
          combos.push(arrange);
          return [...newArr, item];
        }
        return newArr;
      }, []);
      combos.push(...red);
      return dict[n];
    }

    const forThree = recursive(n - 3, [...combo, 3]);
    const forFive = recursive(n - 5, [...combo, 5]);
    const forTen = recursive(n - 10, [...combo, 10]);
    dict[n] = forThree + forFive + forTen;
    comboDict[n] = [
      ...(forThree ? [[...combo, 3]] : []),
      ...(forFive ? [[...combo, 5]] : []),
      ...(forTen ? [[...combo, 10]] : []),
    ];
    return dict[n];
  };
  recursive(_n, [])
  return combos.length
}

console.log(count(8));
