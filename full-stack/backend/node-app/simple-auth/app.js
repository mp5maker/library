const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')

const app = express()

/* Middlewares */
app.use(express.static('public'))
app.use(express.json())

/* View Engine */
app.set('view engine', 'ejs')

/* Database Connection */
const databaseURI = 'mongodb+srv://test:123@cluster0.gs6cu.mongodb.net/node_auth'
mongoose.connect(databaseURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3000))
    .catch((error) => console.log(error))

/* Routes */
app.get('/', (request, response) => response.render('home'))
app.get('/smoothies', (request, response) => response.render('smoothies'))
app.use(authRoutes)