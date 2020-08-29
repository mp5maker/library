import "reflect-metadata"
import "dotenv-safe/config"
import { __prod__, COOKIE_NAME } from "./constants"
import express from 'express'
import Redis from 'ioredis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import cors from 'cors'
import { createConnection } from 'typeorm'
import path from "path"

import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { PostResolver } from "./resolvers/post"
import { UserResolver } from "./resolvers/user"
import { User } from "./entities/User"
import { Post } from "./entities/Post"
import { Updoot } from "./entities/Updoot"
import { createUserLoader } from "./utils/createUserLoader"
import { createUpdootLoader } from "./utils/createUpdootLoader"

const RedisStore = connectRedis(session)
const redis = new Redis()
const main = async () => {
    const conn = await createConnection({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        logging: !__prod__,
        synchronize: true,
        migrations: [path.join(__dirname, './migrations/*')],
        entities: [Post, User, Updoot],
    })
    await conn.runMigrations()

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
            secret: process.env.SESSION_SECRET,
            saveUninitialized: false,
            resave: false
        })
    )

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                PostResolver,
                UserResolver
            ],
            validate: false
        }),
        context: ({ req, res }) => ({
            req,
            res,
            redis,
            userLoader: createUserLoader(),
            updootLoader: createUpdootLoader()
        })
    })
    apolloServer.applyMiddleware({
        app,
        cors: false
    })
    app.listen(parseInt(process.env.PORT), () => console.log('server started on localhost:400'))
}

main().catch((error) => console.error(error))
