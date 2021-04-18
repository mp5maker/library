# Big O (Asymptotic Analysis) Notation

What is good code ?

1. Readable
2. Scalable

What is the big O for the example below?

It is linear time O(n)

```javascript
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(10000000).fill("hero");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "nemo") console.log("FOUND NEMO");
  }
  let t1 = performanc.now();
  console.log(t1 - t0);
}

findNemo([...large, ...everyone]);
```

What is the big O for the example below ?

It is a constant time O(1)

```javascript
const boxes = [0, 1, 2, 3, 4, 5];

function firstTwoItems(array) {
  console.log(array[0]);
  console.log(array(1));
}

console.log(firstTwoItems(boxes)); // O(1) + O(1) = O(2)
```

# Calculating Big O

```javascript
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  // O(n)
  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

funChallenge();
// Big O(3 + 4n);
```

```javascript
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// BIG O(4 + 5n)
```

We always care about the worst case scenario
Drop the constants
Drop non dominant terms

```javascript
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(10000000).fill("hero");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "nemo") {
      console.log("FOUND NEMO");
      break;
    }
  }
  let t1 = performanc.now();
  console.log(t1 - t0);
}

findNemo([...large, ...everyone]);
```

```javascript
function printfistItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1)
  var middleIndex = Math.floor(items.length / 2); // O(1)
  var index = 0; // O(1)

  // O(n/2)
  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  // O(100)
  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
}
// Big O(n/2)
```

```javascript
function compressBoxesTwice(boxes1, boxes2) {
  boxes1.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes2.forEach(function (boxes) {
    console.log(boxes);
  });
}

// Big O(a + b)
```

```javascript
const boxes = [1, 2, 3, 4, 5];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(i, j);
    }
  }
}
console.log(logAllPairsOfArray(boxes));
// Big O(n^2)
```

```javascript
function printAllNumbersThenAllPairSums(numbers) {
  console.log("there are the numbers:"); // O(1)
  // O(n)
  numbers.forEach(function (number) {
    console.log(number);
  });
  console.log("and there are their sums:");
  // O(n)
  numbers.forEach(function (firstNumber) {
    // O(n)
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
// Big O(1 + n + n^2) = Big O(n^2)
```

# Programs

Data Structures + Algorithms = Programs

# O(n!)

```javascript
// O(n!), adding a loop for every loop
```

# What is a good code?

1. Readable (Maintainable)
2. Scalable
   Scalable depends on speed (Time Complexity) and memory (Space Complexity)

# What cause space complexity

1. Variables
2. Data Structures
3. Function Call
4. Allocations

```javascript
function boooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("booo!");
  }
}

console.log(booo([1, 2, 3, 4, 5])); // Space Complexity O(1), Time Complexity O(n)
```

```javascript
function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}
console.log(arrayHiNTimes(6)); // Space Complexity O(1), Time Complexty O(n)
```

```javascript
const array = [
  { tweet: "hi", date: 2012 },
  { tweet: "my", date: 2014 },
  { tweet: "teddy", date: 2018 },
];
console.log(array[0]); // O(1)
console.log(arrray[array.length - 1]); // O(1)
```

Comparing dates of the above example will be O(n^2)

# Data structures

Collection of values, algorithms, steps, allows us to write great programs.

# List of Data Structures (needed for basics)

> Arrays
> Stacks
> Queues
> Linked Lists
> Trees
> Tries
> Graph
> Hash Tables

# List of Algorithms (needed for basics)

> Sorting
> Dynamic Programming
> BFS + DFS (Searching)
> Recursion

# Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items

```javascript
// Example:
const array1 = ["a", "b", "x"];
const array2 = ["x", "y", "z"];
// true

// Example:
const array3 = ["a", "b", "c"];
const array4 = ["x", "y", "z"];
// false

// Easy answer
function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        return true;
      }
    }
  }
}
// O(a * b)
// O(1) - space complexity
// This is not the best approach
```

Improved solution

```javascript
const array1 = ["a", "b", "x"];
const array2 = ["x", "y", "z"];

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  let map = {}
  // O(n)
  for (let i = 0 i < arr1.length; i++) {
    const item = array[i]
    if(!map[item]) {
      map[item] = true
    }
  }
  console.log(map)
  // loop through second array and check if item in second array exists on crreated object. O(n)
  for (let j = 0; j < arr2.length; j++) {
    const item = arr2[j]
    if  (map[item]) {
      return true;
      break;
    }
  }
  return false
}
// O (a + b) // Time complexity is better
// O(a)  == Space Complexity
containsCommonItems2(array1, array2)
```

```javascript
const containsCommonItem3 = (arr1, arr2) =>
  arr1.some((item) => arr2.includes(item));
```

# Find out whether has pair with sum 2

```javascript
function hasPairWithSum2(arr, num) {
  const length = arr.length;
  const set = new Set();
  for (let i = 0; i < length; i++) {
    if (set.has(arr[i])) {
      return true;
    }
    set.add(sum - arr[i]);
  }
  return false;
}
```

# Data structures

It is a collection of values.

Central Processing Unit

> It does all the calculation
> Works faster with ram
> It has a cache and holds very few and tiny memory

Random Access Memory

> stores the variables
> 8 bit is 1 byte

Storage

> Persistent
> It is slow

# Arrays

It is sometimes called as list.

```javascript
const strings = ["a", "b", "c", "d"];
// 4*4 = 16 bytes of storage [32 bit]

// push
strings.push("e"); // O(1)

// pop
strings.pop(); // O(1)

// unshift
strings.unshift("x"); // O(n)

// splice
strings.splice(2, 0, "alien"); // O(n)
```

# Build an array

```javascript
class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    return this.length++;
  }

  pop() {
    const data = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return data;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
```

# Reverse the string

```javascript
function reverse(str) {
  if (typeof(str) === 'string' && !str && str.length < 2>) return
  else {
    const backwards = []
    const totalItems = str.length -1
    for (let i = totalItems; i = 0; i--) {
      backwards.push(str[i])
    }
    return backwards.join('')
  }
}

function reverse2(str) {
  return str.split('').reverse().join('')
}

const reverse3 = (str) => [...str].reverse().join('')
```

# Merge Sorted Arrays

```javascript
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let arrayItem = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if (!array1.length) return array2;
  if (!array2.length) return array1;

  while (arrayIItem !== undefined || array2Item !== undefined) {
    if (array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else if (array2Item < array1Item) {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
```
