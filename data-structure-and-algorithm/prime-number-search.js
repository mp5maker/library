const primeNumberSearch = (number) => {
  const combinations = []
  if (number <= 1) return []
  for (let i = 2; i < number; i++) {
    if (i % 2 == 0) continue;
    else {
      let isPrime = true;
      for(let k = 2; k < i; k++) {
        if (i % k == 0) isPrime = false
      }
      if (isPrime) combinations.push(i)
    }
  }
  return combinations
}

console.log(primeNumberSearch(37))