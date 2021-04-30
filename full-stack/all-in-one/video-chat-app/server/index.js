'use strict';

const os = require('os')
const express = require('express')
const app = express()
const http = require('http')
const socketIO = require('socket.io');

app.use(express.static('public'))

app.get("/", function (_request, _response) {})
const server = http.createServer(app)

server.listen(process.env.PORT || 8000)
const io = socketIO(server)

io.sockets.on('connection', function(socket) {
  socket.on('message', function(message, room) {
    socket.in(room).emit('message', message, room);
  })

  socket.on('create_or_join', function(room) {
    const clientsInRoom = io.sockets.adapter.rooms[room]
    const numClients = clientsInRoom ? Object.keys(clientsInRooms.sockets).length : 0

    if (numClients == 0) {
      socket.join(room);
      socket.emit('created', room, socket.id)
    }

    if (numClients == 1) {
      io.sockets.in(room).emit('join', room);
      socket.join(room)
      socket.emit('joined', room, socket.id)
    }

    if (numClients > 1) {
      socket.emit('full', room)
    }
  })

  socket.on('ipaddr', function() {
    const interfaces = os.networkInterfaces()``
    for(dev in interfaces) {
      interfaces[dev].forEach(function(details) {
        if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
          socket.emit('ipaddr', details.address)
        }
      })
    }
  })

  socket.on('bye', function() {
    console.log('received bye')
  })
})