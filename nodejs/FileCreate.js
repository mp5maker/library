var fs = require('fs');

/* If the file do not exist it will create */
fs.appendFile('files/mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
