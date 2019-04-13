var fs = require('fs');

fs.writeFile('files/mynewFile3.txt', 'Hello Ok', function(error) {
    if (error) throw error;
    console.log('Saved');
    console.log('Replaced');
})