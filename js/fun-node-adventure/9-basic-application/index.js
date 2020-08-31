const fs = require('fs')

/* Current files in the directory */
console.log(fs.readdirSync(__dirname))

/* Current Async files in the directory */
const doSomethingWithIt = (error, files) => {
    console.log(files)
}
console.log(fs.readdirSync('.', doSomethingWithIt))


process.stdout.write('Hello Bhai')