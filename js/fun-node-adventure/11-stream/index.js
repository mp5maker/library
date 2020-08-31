const fs = require('fs')

const stream = fs.createReadStream('my-file.txt')
stream.on('data', function(chunk) {
    console.log(fs.ReadStream(chunk))
})
stream.on('end', function(end) {
    console.log('end reached')
})