const http = require('http')
const express = require('express')
const socketIO = require('socket.io')
const bodyParser = require('body-parser')

const publicRoutes = require('./routes/public')

const PORT = 4000
const app = express()

/* STATIC */
app.use(express.static(`${__dirname}/static`))

/* MIDDLEWARE */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* ROUTES */
app.use(publicRoutes)

/* SERVER */
const server = http.createServer(app)
const io = socketIO(server)

/* IO */
io.on('connection', function(socket) {
    console.log('user connected')

    socket.on('disconnect', () => {
        console.log('user disconnectedd')
    })
})

/* LISTEN */
server.listen(PORT, () => console.log(`Connected in port ${PORT}`))