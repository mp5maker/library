const fs = require('fs')
const mybuffer = new Buffer('==ii1j2i3h1i23h', 'base64')
console.log(mybuffer)
fs.writeFile('logo.png', mybuffer, (error) => console.log(error))