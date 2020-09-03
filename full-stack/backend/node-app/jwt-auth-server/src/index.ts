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
import { createAccessToken } from "./auth"

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
    app.use(cookieParser())
    apolloServer.applyMiddleware({ app })

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
        return res.send({ ok: true, accessToken: createAccessToken(user) })
    })

    /* LISTEN */
    app.listen(4000, () => console.log('Express Server Started'))
}

main().catch((error) => console.log(error))