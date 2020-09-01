const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const app = express()
let user = []

app.use(express.static(`${__dirname}/static`))

app.get('/', function(_request, response) {
    response.sendFile(`${__dirname}/index.html`)
})

const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', (socket) => {
    user.push({})
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })

    socket.on('chat message', (message) => {
        io.emit('chat message', message);
    })
})

server.listen(4000, () => console.log('connected'))