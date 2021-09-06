var fs = require('fs');

var readStream = fs.createReadStream('files/hello.txt');
readStream.on('open', function() {
    console.log('The file is open');
})