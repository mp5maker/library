const fs = require('fs')

fs.readFile('./hello.txt', function(error, data) {
    if (error) return console.log(error)
    console.log(data)
})