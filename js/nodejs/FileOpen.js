var fs = require('fs');

fs.open('files/mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});