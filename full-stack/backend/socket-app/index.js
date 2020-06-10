const express = require("express");
const path = require('path')
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http)

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'))
})

/* Static Folder */
app.use(express.static(path.join(__dirname, "static")));
app.use(express.static(path.join(__dirname, "node_modules/socket.io-client/dist")));
app.use(express.static(path.join(__dirname, "node_modules/jquery/dist")));

/* Socket IO */
io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on('chat message', (message) => {
        console.log('message: ' + message)
        io.emit('chat message', message)
    })
})

http.listen(3000, () => {
    console.log('listening on localhost:3000')
})