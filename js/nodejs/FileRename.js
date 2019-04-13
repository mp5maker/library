var fs = require('fs');

fs.rename('files/mynewfile1.txt', 'files/hello.txt', function(error) {
    if (error) throw error;
    console.log('Renamed')
})