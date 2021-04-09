# How javascript works?
Javascript is a interpreted and single threaded language.
By having a javascript engine, the machine understands the javascript and
converts to machine readable language

# List of ECMAScript Engines?
One of them is *V8 Engine* created by Google because of the Google Map issues with
other engines
*Spider Monkey* is another Engine

# Creator of First Javascript Engine?
* Brendon Eich, he created *Spider Monkey* which is still used in Firefox Mozilla

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
* eval()
* arguments
* for in
* with
* delete
* Hidden classes

These optimizes the code
* Inline Caching
```javascript
function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`
}

const userData = {
    firstName: 'Johnson',
    lastName: 'Junior'
}

findUser(userData)
// if we keep on calling this function
//It will cache it to 'found Johnson Junior'

```


# Hidden Classes
```javascript
    function Animal(x, y) {
        this.x = x
        this.y = y
    }

    const obj1 = new Animal(1, 2);
    const obj2 = new Animatl(3,4);

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
    return num -2
}

function calculate() {
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal)
}

debugger;
calculate()
calculate()
```

--> Debugger
subtractTow
calculate
anonymous


# Stack Overflow
```javascript
function inception() {
    inception()
}
```

It keeps on piling the stacks.


# Garbage Collection
Javascript is a garbage collected language. It cleans up the memory, when the memory is
not used. It used mark and sweep method to remove the not needed memory.

# Memory Leaks
Reasons for memory leaks
* Global Variable
* Event Listeners
* setInterval

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
global object and this keyword

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
var sing2 = function() {
    console.log('I sing')
}

// function declaration
function sing() {
    console.log('I will sing')
}
```
