```javascript
const colors = require('colors')

const net = require('net')
const server = net.createServer
conn.on('data')
conn.write('')
conn.close('')
server.listen

const http = require('http')
const server = http.createServer
server.listen
request.url
request.method
response.writeHead
response.end

__proto__
prototype
__defineGetter__
__defineSetter__

const fs = require('fs')
fs.readFile
fs.writeFile
fs.readdirSync
fs.stat
fs.readdir
fs.createReadStream
fs.ReadStream

module.exports
exports

process.nextTick
process.stdout.write
process.cwd()
process.name
process.chdir('/')
process.stdin.resume()
process.stdin.pause()

const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)
app.set('view options', { layout: false })
app.set('trust proxy', 1)

/* STATIC */
app.use(express.static(`${__dirname}/public`))

/* ROUTES */
app.get('/', function(reqeust, response) {})
app.put('/', function(request, reponse, next) {})
app.patch('/', function(request, reponse, next) {})
app.head('/', function(request, reponse, next) {})
app.post('/', function(request, reponse, next) {})
app.del('/', function(request, reponse, next) {})

request.header('content-type')
request.is('json')
response.sendFile(path.join(__dirname, 'views/index.html'))
response.render('index')
response.send(`<p> some thing </p>`)
response.json(data)
response.redirect('/')


const EventEmitter = require('events').EventEmitter
const a = new EventEmitter
a.on
a.emit
a.once
```