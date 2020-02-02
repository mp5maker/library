require('module-alias/register')
import express from 'express'
import graphqlHTTP from 'express-graphql'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


/* Schema */
import { schema } from './schema'


const PORT = 8000
const app = express()
dotenv.config()
const mongoDBURI = `mongodb+srv://photonkhan:${process.env.password}@cluster0-mc0jf.mongodb.net/test?retryWrites=true&w=majority`
const mongoDBOptions = { useUnifiedTopology: true  }
mongoose.connect(mongoDBURI, mongoDBOptions)
mongoose.connection.once('open', () => console.log(`Connected to database`))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})