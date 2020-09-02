require('dotenv').config()
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')

const app = express()


/* SETTINGS */
app.set('view engine', 'jade')
app.set('views', `${__dirname}/views`)
app.set('view options', { layout: false })

/* MIDDLEWARES */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', function(request, response, next) {
    response.render('index')
})


app.post('/create', function(request, response, next) {

})

app.get('/item/:id', function(request, response, next) {
    response.render('item')
})

app.post('/item/:id/review', function(request, response, next) {

})


const server = http.createServer(app)
server.listen(4000, () => console.log('Connected to 4000'))