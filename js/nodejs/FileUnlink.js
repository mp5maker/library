var fs = require('fs');

fs.unlink('files/mynewFile3.txt', function(error) {
    if (error) throw error;
    console.log('Deleted')
})