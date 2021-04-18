# How javascript works?

Javascript is a interpreted and single threaded language.
By having a javascript engine, the machine understands the javascript and
converts to machine readable language

# List of ECMAScript Engines?

One of them is _V8 Engine_ created by Google because of the Google Map issues with
other engines
_Spider Monkey_ is another Engine

# Creator of First Javascript Engine?

- Brendon Eich, he created _Spider Monkey_ which is still used in Firefox Mozilla

# Javascript Engine?

It is created using C++

# How the javascript engine works?

Reads the Javascript file. Then it does lexical analysis where it breaks down code
into tokens, these tokens are formed in Abstract Syntax Tree (AST)
Then it goes to interpreter. These interpreters then spills out the byte code

# Interpreter Vs Compiler

Code Process -> First goes through high level language then to byte code and at
the end to machine code

Interpreter, translate the code, read the files line by line on the fly.
It spits out to bytecode

Compiler, doesn't translate on the fly and it translates it before
it spits out the machine code

# V8 Engine

Compiler does the optimization, it takes little bit time to start
JIT Compiler, Just in time compiler is used in V8 Engines, which uses
the best of both worlds of interpreter and compiler

Parser -> AST -> Interpreter -> Spits out the byte code
Within Interpreter there is a profiler which detects the code that needs to be optimized
and passes to the compiler and then spits out the optimized code

# Is Javascript an interpreted language?

It used to be a interpreted language, when Spider Monkey was present during the old days
Nowaways techinically it depends.

# Optimized for the compiler?

The functions that are very bad for optimization

- eval()
- arguments
- for in
- with
- delete
- Hidden classes

These optimizes the code

- Inline Caching

```javascript
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
  firstName: "Johnson",
  lastName: "Junior",
};

findUser(userData);
// if we keep on calling this function
//It will cache it to 'found Johnson Junior'
```

# Hidden Classes

```javascript
function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animatl(3, 4);

obj1.a = 30;
obj1.b = 100;

// This is going to slow things down
```

# Web Assembly

Standard binary format, Compile the code to web assembly helps the run code
faster in browser

# Call Stack and Memory Heap

Javascript Engine: Reading the code and executing the code
Memory Heap: Store and write information
Call Stack: Where the code is, in the execution

Anonymous: Global Execution Context
Call Stack works in First In Last Out mode

```javascript
function substractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}

debugger;
calculate();
calculate();
```

--> Debugger
subtractTow
calculate
anonymous

# Stack Overflow

```javascript
function inception() {
  inception();
}
```

It keeps on piling the stacks.

# Garbage Collection

Javascript is a garbage collected language. It cleans up the memory, when the memory is
not used. It used mark and sweep method to remove the not needed memory.

# Memory Leaks

Reasons for memory leaks

- Global Variable
- Event Listeners
- setInterval

# Single Threaded

One set of instructions are executing at a time. Javascript is synchronous

# Javascript Runtime

Nowadays browser just dont just use javascript engine since it is synchronous.
Node.js, Browser utilizes javascript engine and the web api.

Web Api comes from the browser. Web Api provides
DOM, fetch, setTimeOut, indexedDB, caches. These apis are asynchronous

We call the callstack, as soon as something comes up like (fetch api) it passes the
work to web api. Let me do that in the background. Then it store web api asynchronous work
in a box called callback queue. Then the event loops checks where the stack is empty or not.
Then it is added on the stack. It adds on the call stack, until the whole file is read and run

# Node JS

Uses V8 engines to use javascript and uses libuv for the event loops
Node has no window instead it has global.
Therefore, it is a server side. It uses the asynchronous code using worker threads

# Execution Context

Javascript will always be on the global execution context. This will give us
global object and this keyword, arguments and also the variable environment.
Each execution context has its own variable environment

# Lexical Environment / Lexical Scope / Lexical Analysis

In javascript our lexical scope (available data + variables where the function was defined)
determines our available variables. Now where the function is called dynamic scope

# Hoisting

During the creating phase. It is only applicable to 'var' and 'function'
Functions are fully hoisted which means compiled before it runs [applicable for function declaration]
Variable are partially hoisted which means right side of the variable value are not assinged
before interpretation

```javascript
// funciton expression
var sing2 = function () {
  console.log("I sing");
};

// function declaration
function sing() {
  console.log("I will sing");
}
```

# Scope Chain

It links or chains to its parent variable, environment.
eval() and with() because it has issues with scope and changes how the scope works.

# Leakage of the global variable

Use strict fixes the leakage of the global variable

```javascript
"use strict";

function wierd() {
  height = 50;
  return height;
}

wierd();
```

# Function Scope vs Block Scope

- Function Scope
  variable can be accessed

```javascript
if (5 < 4) {
  var secret = "12345";
}
secret;

function loop() {
  for (var i = 5; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
```

- Block Scope
  variable cannot be accessed

```javascript
if (5 < 4) {
  let secret = "12345";
}
secret;

function loop() {
  for (let i = 5; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
```

# Immediately Invoked Function Expression

Popular libraries like jQuery used this expression to make it function expression and avoid funciton declaration
and avoiding hoisting

```javascript
(function () {})();
```

Creating a simple library like jQuery

```javascript
var customFunction = (function () {
  return {
    a: () => 5,
  };
})();
return {};
```

Custom way of calling the jQuery

```javascript
var customFunction = (function (customQuery) {
  customQuery("h1").click(function () {
    customQuery("h1").hide();
  });
})(jQuery);
```

# This

Gives methods access to their object
Execute same code for multiple objects

```javascript
const obj = {
  name: "Billy",
  sing() {
    return `lalalal ${this.name}`;
  },
  singAgain() {
    return `${this.sing()}!`;
  },
};
```

```javascript
const name = "Sunny";
function importantPerson() {
  console.log(this.name);
}

const objOne = {
  name: "Cassy",
  importantPerson,
};
const objTwo = {
  name: "Jacob",
  importantPerson,
};

importantPerson(); // Sunny
objOne.importantPerson(); // Cassy
objTwo.importantPerson(); // Jacab
```

```javascript
const a = function () {
  console.log("a", this);
  const b = function () {
    console.log(b, this);
    const c = {
      hi: function () {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};

a(); // a -> this = Window
// Inside b (this = Window)
// Inside c (this is not Window)
// This is a dynamic scope
```

Fix the above issue with arrow functions with ES6 syntax

```javascript
const a = () => {
  console.log("a", this);
  const b = () => {
    console.log(b, this);
    const c = {
      hi: () => {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};
```

Previously it was solved by bind

```javascript
const obj = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var anotherFunc = function () {
      console.log("b", this);
    };
    return anotherFunc.bind(this);
  },
};
```

# Call, Apply, Bind

Under the hood, all the functions calls the 'call' method

Call: borrow the function from another object

```javascript
const wizard = {
  name: "Merlin",
  health: 100,
  heal(numOne, numTwo) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: "Robin Hood",
  health: 30,
};

console.log(archer); // health = 30
wizard.heal.call(archer, 50, 30);
console.log(archer); // health = 110
```

Apply: borrow the function from another object
The only difference is, it takes parameters in the form of array

```javascript
console.log(archer); // health = 30
wizard.heal.apply(archer, [50, 30]);
console.log(archer); // health = 110
```

Bind: it doesn't return the function like call or apply

```javascript
console.log(archer); // health = 30
const healArcher = wizard.heal.bind(archer);
healArcher(50, 30);
console.log(archer); // health = 110
```

# Currying

```javascript
function multiply(a, b) {
  return a * b;
}

let multipleByTwo = multiply.bind(this, 2); // a paramer is now two
console.log(multipleByTwo(4)); // b parameter 4, thereform 2 * 4 = 8
```

```javascript
var b = {
  name: "jay",
  say() {
    console.log(this); // b
  },
};

var c = {
  name: "jay",
  say() {
    return function () {
      console.log(this); // windpow
    };
  },
};

var d = {
  name: "jay",
  say() {
    return () => console.log(this); // d
  },
};
```

# Context vs Scope

Context: How a value is invoked
Scope: Visibility of the variables

# Primitive Types

1. numbers; 5
2. boolean; true or false
3. string; 'To be or not to be'
4. undefined: meaning the abscence of definition
5. null // typeof(null) is an object: meaning the abscence of no value
6. Symbol('just me') // It is a new on from ES6

# Non Primitive Types

7. Object {}
   Arrays and functions are objects, eg: [] or function(){}
   typeof funciton(){} is a 'function'

# Pass by reference vs Pass be value

Pass by value

```javascript
var a = 5; // Pass by value
var b = a; // Pass by value
b++;
console.log(a); // 5
console.log(b); // 6
```

Pass by reference

```javascript
let obj1 = { name: "Yao", passowrd: "123" };
let obj2 = obj1;
obj2.password = "easypasy";

console.log(obj1.password); // easypasy
console.log(obj2.password); // easypasy
```

Samething happens for arrays

```javascript
let c = [1, 2, 3, 4, 5];
let d = c;
d.push(6);
console.log(c); // [1,2,3,4,5,6]
console.log(d); // [1,2,3,4,5,6]
```

# Shallow and Deep Cloning

```javascript
let obj = {
  a: "a",
  b: "b",
  c: "c",
  d: {
    deep: "try and copy me",
  },
};
let clone = Object.assign({}, obj); // Shallow Clone
let cloneTwo = { ...obj }; // Shallow Clone
let superClone = JSON.parse(JSON.stringify(obj)); // Deep Clone and has performance issue
```

# Type Coersion

Double Equality changes the type for values

```javascript
1 == "1"; // true
Object.is(-0, +0); // false
Object.is(NaN, NaN); // true
```

# Types of Function

```javascript
// First Way
const one = function () {
  return 1;
};
one();

// Second Way
const obj = {
  two: () => 2,
};
obj.two();

// Third Way
const three = function () {
  return 1;
};
three.call();

// Fourth Way
const four = new Function("num", "return num");
four(4);
```

# Functions

Functions are first class citizen in Javascript

```javascript
var stuff = function () {};
function a(fn) {
  fn();
}
function b() {
  return function c() {
    console.log("bye");
  };
}
```

# Higher Order Function

It lets functions as a parameter

```javascript
const giveAccessTo = (name) => `Access Granted to ${name}`;
function authenticate(verify) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }
  return true;
}

function letPerson(person, fn) {
  if (person.level == "admin") {
    fn(50000);
  } else if (person.level === "user") {
    fn(10000);
  }
  return giveAccessTo(person.name);
}

letPerson({ level: "admin", name: "Sally" }, authenticate);
```

```javascript
const multiplyBy = function (num1) {
  return function (num2) {
    return num1 * num2;
  };
};

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4);
```

# Closures

It is a special case for the closures, the variables are not garbage collected.
They are very memory effficient and allows encapsulation

```javascript
function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa} ${father} ${son}`;
    };
  };
}
```

Checking Memory Efficient

```javascript
// Not Optimized Code
const heavyDuty(index) {
    const bigArray = new Array(7000).fill('ok')
    console.log('created')
    return bigArray[index]
}

heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
heavyDuty(688)

// Optimized Code
function heavyDuty2() {
    const bigArray = new Arrray(7000).fill('ok')
    console.log('created again')
    return function(index) {
        return bigArray[index]
    }
}

heavyDuty2(688)
heavyDuty2(688)
heavyDuty2(688)
heavyDuty2(688)
```

Checking Encapsulation

```javascript
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction
    const launch = () => return 'fire'
    setInterval(passTime, 1000)
    return {
        launch,
        totalPeaceTime
    }
}
const ohNo = makeNuclearButton()
ohno.totalPeaceTime() // 0
```

# Prototypes

    Object

Array Function

Array is chained to object
Function is chained to object

```javascript
const array = [];
console.log(array.__proto__); // It goes up the prototype chain (Array)
console.log(array.__proto__.__proto__); // It goes up to the prototype chain (Object)
```

# Proto

**proto** links to prototype
Do not manually set **proto** bad for compilation
Proto is one of the property in the prototype

```javascript
let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};
lizard.__proto__ = dragon;
lizard.isPrototypeOf(dragon); // true
for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop);
  }
}
```

# Prototypal Inheritance

```javascript
const human = {
  mortal: true,
};
let socrates = Object.create(human);
socrates.age = 45;
console.log(human.isPrototypeOf(socrates)); // true
```

```javascript
Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};
new Date("1988-10-10").lastYear(); // 1987

Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + "ok");
  }
  return arr;
};
console.log([1, 2, 3].map()); // 1ok, 2ok, 3ok
```
