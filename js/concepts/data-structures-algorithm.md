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
