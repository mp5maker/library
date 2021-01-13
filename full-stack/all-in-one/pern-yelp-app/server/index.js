require('dotenv-safe').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const PORT = 5000
const app = express()
const version = '/api/v1'

/* MIDDLEWARE */
app.use(cors())
app.use(express.json())

/* STATIC */
app.use(express.static(path.join(__dirname, 'static')))


/* ROUTES */
app.use(`${version}/restaurants`, require('./routes/restaurants'))


/* SERVER */
app.listen(PORT, () => {
  console.log(`Connected to the Port: ${PORT}`)
})
