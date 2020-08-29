import { Request, Response } from 'express'
import { Redis } from 'ioredis'
import { createUserLoader } from './utils/createUserLoader'
import { createUpdootLoader } from './utils/createUpdootLoader'

export type MyContext = {
    req: Request & { session: Express.Session },
    res: Response,
    redis: Redis,
    userLoader: ReturnType<typeof createUserLoader>
    updootLoader: ReturnType<typeof createUpdootLoader>
}