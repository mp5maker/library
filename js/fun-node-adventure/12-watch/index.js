const fs = require('fs')
const files = fs.readdirSync(process.cwd())
files.forEach(function(file) {
    if (/\.txt/.test(file)) {
        fs.watchFile(`${process.cwd()}/${file}`, function() {
            console.log(`${file} changed`)
        })
    }
})