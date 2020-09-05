import 'module-alias/register';
import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cors from 'cors'

import userRoute from '@myapp/routes/user'
import swaggerRoute from '@myapp/swagger'

/* SETUP */
const PORT = 4000
const app = express()

/* MIDDLEWARE */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

/* ROUTES */
app.use(express.static(`${__dirname}/static`))
app.use(userRoute)

app.get('/', (_req, res) => res.send('Where all the api lives'))
app.use(swaggerRoute)


/* LISTEN */
const server = http.createServer(app)
server.listen(PORT, () => console.log(`You are connected to: ${PORT}`))