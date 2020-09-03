import "dotenv-safe/config"
import "reflect-metadata"
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { UserResolver } from './UserResolver'
import { buildSchema } from "type-graphql"
import { createConnection } from "typeorm"
import cookieParser from 'cookie-parser'
import { verify } from 'jsonwebtoken'
import { User } from "./entity/User"
import { createAccessToken, createRefreshToken } from "./auth"
import { sendRefreshToken } from "./sendRefreshToken"
import cors from 'cors'

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
    app.use(cors({
        origin: "http://localhost:3000",
        credentials: true,
    }))
    app.use(cookieParser())
    apolloServer.applyMiddleware({
        app,
        cors: false
    })

    /* ROUTES */
    app.get("/", (_req, res) => res.send('Hello'))
    app.post('/refresh-token', async (req, res) => {
        const token = req.cookies.jid
        if (!token) return res.send({ ok: false, accessToken: '' })
        let payload: any = null;
        try {
            payload = verify(token, process.env.REFRESH_TOKEN_SECRET!)
        } catch(error) {
            console.log(error)
            return res.send({ ok: false, accessToken: ''})
        }
        const user = await User.findOne({ id: payload.userId })
        if (!user) return res.send({ ok: false, accessToken: '' })
        if (user.tokenVersion !== payload.tokenVersion) return res.send({ ok: false, accessToken: '' })

        sendRefreshToken(res, createRefreshToken(user))
        return res.send({ ok: true, accessToken: createAccessToken(user) })
    })

    /* LISTEN */
    app.listen(4000, () => console.log('Express Server Started'))
}

main().catch((error) => console.log(error))