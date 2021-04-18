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
    let p = j*2; // O(n)
    let q = j *2; // O(n)
  }
  let whoAmI = "I don't know" // O(1)
}

BIG O(4 + 5n)
```
