import { Resolver, Query, Mutation, Arg, ObjectType, Field, Ctx } from 'type-graphql'
import { User } from './entity/User'
import { hash, compare } from 'bcryptjs'
import { MyContext } from './MyContext'
import { createAccessToken, createRefreshToken } from './auth'

@ObjectType()
class LoginResponse {
    @Field()
    accessToken: string
}

@Resolver()
export class UserResolver {
    @Query(() => [User])
    users() {
        return User.find()
    }

    @Mutation(() => LoginResponse)
    async login(
        @Arg('email') email: string,
        @Arg('password') password: string,
        @Ctx() { res }: MyContext,
    ): Promise<LoginResponse> {
        const user = await User.findOne({ where: { email }})
        if (!user) {
            throw new Error('Invalid Login')
        }
        const valid = await compare(password, user.password)
        if (!valid) throw new Error('Invalid Login')

        res.cookie(
            'pid',
            createRefreshToken(user),
            { httpOnly: true }
        )

        return {
            accessToken: createAccessToken(user)
        }
    }

    @Mutation(() => Boolean)
    async register(
        @Arg('email') email: string,
        @Arg('password') password: string,
    ) {
        const hashedPassword = await hash(password, 12)
        try {
            await User.insert({
                email,
                password: hashedPassword
            })
        } catch(error) {
            console.log(error)
            return false
        }
        return true
    }
}