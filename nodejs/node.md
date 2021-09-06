# Node

### Version of the node

```bash
node -v
```

### Editor Mode

```bash
node
.editor
```

### Access Global Object

- There is no window object in nodejs

```bash
console.log(global)
```

### Core Modules

To save developers for reinventing the wheel each time.
Node.js has several built-in modules to perform common tasks efficiently.
The core modules are defined within the Nodejs source code and are located
in the lib/folder

```bash
node
require('module').builtinModules
```

### Console

- Log

```bash
const petsArray = ['dog', 'cat', 'bird', 'monkey'];
console.log(petsArray)
```

- Table

```bash
const petsArray = ['dog', 'cat', 'bird', 'monkey'];
console.table(petsArray)
```

- Assert

```bash
const petsArray = ['dog', 'cat', 'bird', 'monkey'];
console.assert(petsArray, 5)
```

### Process Module

The process.env property i s an object which stores and controls information
about the environment in which th process is currently running

```bash
process.env.NODE_ENV
```

- Memory Usage
  Returns the information on the CPU demands of the current process

```bash
process.memoryUsage()
```

- Process argv

```bash
console.log(process.argv[3])
```

### OS Module

- It is not a global module and needs to be included in the file

```javascript
const os = require("os");

os.type();
os.arch();
os.networkInterfaces();
os.homedir();
os.hostname();
os.uptime();
```

### Util Module

- Check Date

```javascript
const util = require("util");
const today = new Date();

console.log(util.types.isDate(today));
```

- Promisify

```javascript
// Initially with callbacks
function getUser(id, callback) {
  return setTimeout(() => {
    if (id === 5) {
      callback(null, { nickname: "Teddy" });
    } else {
      callback(new Error("User not found"));
    }
  }, 1000);
}

function callback(error, user) {
  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  console.log(`User found! Their nickname is: ${user.nickname}`);
}
```

```javascript
const getUserPromise = util.promisify(getUser);

getUserPromise(id)
  .then((user) => {
    console.log(`User found! Their nickname is: ${user.nickname}`);
  })
  .catch((error) => {
    console.log("User not found", error);
  });
```

### Node Package Manager

- Npm is an online collection, or registry, of software

### Events

- The events module provides EventEmitter objects used to assign listener functions triggered on specified events
  > Events

```javascript
let events = require("events");

let listenerCallback = (data) => {
  console.log("Celebrate " + data);
};

const myEmitter = new events.EventEmitter();

myEmitter.on("celebration", listenerCallback);
myEmitter.emit("celebration", "Happy New Year");
```

### User Input / Output

process.stdin is an instance of EventEmitter
When a user hits enter, a 'data' event is fired

The buffer module is used to handle binary data.
The userInput we receive is an instance of the **Node Buffer Class**

```javascript
process.stdin.on("data", (userInput) => {
  userInput.toString();
});
```

### Error Module

Javascript Errors: EvalError, SyntaxError, RangeError, ReferenceError, TypeError, URIError

### Buffer Module

The buffer module is used to handle binary data.
Buffer module is within the global scope
Buffer object represents a fixed amount of memory that cannot be resized.
Buffer object are similar to an array of integers where each element in the array represents a byte of data.
The buffer object will have a range of integers from 0 to 255 inclusive

Buffer provides various methods

> alloc()

alloc() => creates a new Buffer object with the size specified as the first parameter
It accepts three arguments size, fill (size with values default is 0), encoding (default is UTF-8)

> toString()

toString() => buffer converted to string

> from()

from() => converts the string to buffer

> concat()

concat() => concats to buffer array

```javascript
const bufferAlloc = Buffer.alloc(15, "b");
const buffer1 = Buffer.from("hello");
const buffer2 = Buffer.from("world");
const bufferArray = [buffer1, buffer2];
const bufferConcat = Buffer.concat(bufferArray);
const bufferString = bufferConcat.toString();
console.log(bufferString);
```

### Fs Module

- The fs module is used to interact with the user's filesystem
- Each method available through the fs modules has synchronous version and an asynchronous version

> readFile()
> Reading the contents of the entire file

```javascript
const fs = require("fs");

let readDataCallback = (err, data) => {
  if (err) console.log(`Something went wrong: ${err}`);
  else console.log(`Provided file contained: ${data}`);
};

fs.readFile("./file.txt", "utf-8", readDataCallback);
```

### Readable Streams

```javascript
const readline = require("readline");
const fs = require("fs");

const myInterface = readline.createInterface({
  input: fs.createReadStream("text.txt"),
});

myInterface.on("line", (fileLine) => {
  console.log(`The line read: ${fileLine}`);
});
```

### Writable Streams

```javascript
const fs = require("fs");
const fileStream = fs.createWriteStream("output.txt");

fileStream.write("This is the first line");
fileStream.write("This is the second line");
fileStream.end();
```

### Timers Module
- The timer module provides the setImemediate() function which runs immediately
  after the current poll phase is completed.
