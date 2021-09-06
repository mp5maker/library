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
