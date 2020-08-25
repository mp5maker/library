import { Resolver, Arg, InputType, Field, Mutation, Ctx, ObjectType } from 'type-graphql'
import get from 'lodash/get'
import argon2 from 'argon2'

import { MyContext } from 'src/types'
import { User } from '../entities/User'

@InputType()
class UsernamePasswordInput {
    @Field()
    username: string

    @Field()
    password: string
}

@ObjectType()
class FieldError {
    @Field()
    field: string

    @Field()
    message: string
}

@ObjectType()
class UserResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[]

    @Field(() => User, { nullable: true })
    user?: User
}

@Resolver()
export class UserResolver {
    @Mutation(() => User)
    async register(
        @Arg('options') options: UsernamePasswordInput,
        @Ctx() { em }: MyContext
    ) {
        const username = get(options, 'username', '')
        const password = get(options, 'password', '')
        const hashedPassword = await argon2.hash(password)

        const user = em.create(User, { username, password: hashedPassword })
        await em.persistAndFlush(user)
        return user
    }

    @Mutation(() => UserResponse)
    async login(
        @Arg('options') options: UsernamePasswordInput,
        @Ctx() { em }: MyContext
    ): Promise<UserResponse> {
        const username = get(options, 'username', '')
        const password = get(options, 'password', '')
        const hashedPassword = await argon2.hash(password)

        const user = await em.findOne(User, { username })
        if (!user) {
            return {
                errors: [
                    {
                        field: 'username',
                        message: "USERNAME_DO_NOT_EXIST"
                    }
                ]
            }
        }

        const valid = await argon2.verify(hashedPassword, password)
        if (!valid) {
            return {
                errors: [
                    {
                        field: 'password',
                        message: "INVALID_PASSWORD"
                    }
                ]
            }
        }

        return { user }
    }
}