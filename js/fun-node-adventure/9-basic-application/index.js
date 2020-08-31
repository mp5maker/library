const fs = require('fs')
const stdin = process.stdin
const stdout = process.stdout

/* Current files in the directory */
console.log(fs.readdirSync(__dirname))

/* Current Async files in the directory */
const doSomethingWithIt = (error, files) => {
    console.log(files)
}
console.log(fs.readdirSync('.', doSomethingWithIt))


stdout.write('Hello Bhai \n')

const onReadDir = function(_onReadDirError, files) {
    if (!files.length) return console.log('No Files to Show\n')

    function file(i) {
        const filename = files[i]

        const onReadFile = function(_ReadFileError, data) {
            console.log(data)
        }

        const onStdIn = function (data) {
            const number = Number(data)
            if (!files[number]) stdout.write('Enter your choice: ')
            else {
                stdin.pause()
                fs.readFile(`${__dirname}/${filename}`, 'utf-8', onReadFile)
            }
        }

        const onStat = function(_stateError, stat) {
            if (stat.isDirectory()) console.log(`${i}. [DIRECTORY] ${filename}`)
            else console.log(`${i}. [FILENAME] ${filename} \n`)
            if (++i == files.length) {
                stdout.write('Enter your choice: ')
                stdin.resume()
                stdin.setEncoding('utf-8')
                stdin.on('data', onStdIn)
            } else file(i)
        }

        fs.stat(`${__dirname}/${filename}`, onStat)
    }

    file(0)
}

fs.readdir(process.cwd(), onReadDir)