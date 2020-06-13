const express = require('express')
const app = express()
const path = require('path')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const PORT = 7000

/* Static */
const staticFolder = path.join(__dirname, 'static')
app.use(express.static(staticFolder))

/* Third Party Apps */
const bootstrapFolder = path.join(__dirname, 'node_modules/bootstrap/dist/css')
app.use(express.static(bootstrapFolder))

/* Index */
const indexFile = path.join(__dirname, 'index.html')
app.get('/', (request, response) => response.sendFile(indexFile))

/* Socket IO */
io.on('connection', (socket) => {
    console.log("New Web socket Connection....")

    /* Fires of the only to the connected user */
    socket.emit('information', 'Welcome to Chatroom')

    /* Broadcast everyone except the user connected */
    socket.broadcast.emit('A user has entered a room')

    /* Custom */
    socket.on('chat', (message) => io.emit("chat", message))

    /* Disconnect */
    socket.on('disconnect', () => console.log('A user is disconnected'))
})

/* Listening */
http.listen(PORT, () => console.log('Listening on *:7000'))