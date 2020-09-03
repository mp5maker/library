import "dotenv/config"
import "reflect-metadata"
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { UserResolver } from './UserResolver'
import { buildSchema } from "type-graphql"
import { createConnection } from "typeorm"

const main = async() => {
    const app = express()
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                UserResolver
            ]
        }),
        context: ({ req, res }) => ({ req, res })
    })

    await createConnection();

    /* MIDDLEWARES */
    apolloServer.applyMiddleware({ app })

    /* ROUTES */
    app.get('/', (_request, response) => response.send('Hello'))

    /* LISTEN */
    app.listen(4000, () => console.log('Express Server Started'))
}

main().catch((error) => console.log(error))