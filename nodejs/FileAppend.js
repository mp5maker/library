var fs = require('fs');

fs.appendFile('files/mynewfile3.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});