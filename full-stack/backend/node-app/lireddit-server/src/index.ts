import "reflect-metadata"
import { __prod__, COOKIE_NAME } from "./constants"
import express from 'express'
import Redis from 'ioredis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import cors from 'cors'
import { createConnection } from 'typeorm'

import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { HelloResolver } from "./resolvers/hello"
import { PostResolver } from "./resolvers/post"
import { UserResolver } from "./resolvers/user"
import { User } from "./entities/User"
import { Post } from "./entities/Post"

const RedisStore = connectRedis(session)
const redis = new Redis()
const main = async () => {
    const conn = await createConnection({
        type: 'postgres',
        database: 'lireddit',
        username: 'postgres',
        password: '123',
        logging: true,
        synchronize: true,
        entities: [Post, User],
    })

    const app = express()
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }))
    app.use(
        session({
            name: COOKIE_NAME,
            store: new RedisStore({
                client: redis,
                disableTouch: true,
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
                httpOnly: true,
                sameSite: 'lax', // csrf
                secure: __prod__ // cookie only work in https for production
            },
            secret: 'photon',
            saveUninitialized: false,
            resave: false
        })
    )

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                HelloResolver,
                PostResolver,
                UserResolver
            ],
            validate: false
        }),
        context: ({ req, res }) => ({ req, res, redis })
    })
    apolloServer.applyMiddleware({
        app,
        cors: false
    })
    app.listen(4000, () => console.log('server started on localhost:400'))
}

main().catch((error) => console.error(error))
