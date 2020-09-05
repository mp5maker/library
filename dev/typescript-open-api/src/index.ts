import 'module-alias/register';
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import swaggerRoute from '@myapp/swagger'
import { RegisterRoutes } from "@myapp/api/routes";

/* SETUP */
const PORT = 4000
const app = express()

/* MIDDLEWARE */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

/* ROUTES */
app.use(express.static(`${__dirname}/static`))
app.use(swaggerRoute)
app.get('/', (_req, res) => res.send('Where all the api lives'))
RegisterRoutes(app)

/* LISTEN */
app.listen(PORT, () => console.log(`You are connected to: ${PORT}`))