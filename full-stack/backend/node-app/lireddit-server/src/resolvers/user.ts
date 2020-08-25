import { Resolver, Arg, InputType, Field, Mutation, Ctx, ObjectType, Query } from 'type-graphql'
import get from 'lodash/get'
import argon2 from 'argon2'
import { EntityManager } from '@mikro-orm/postgresql'

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
    @Query(() => User, { nullable: true })
    async me(
        @Ctx() { em, req }: MyContext
    ) {
        if (!req.session.userId) return null
        const user = await em.findOne(User, { id: req.session.userId })
        return user
    }


    @Mutation(() => UserResponse)
    async register(
        @Arg('options') options: UsernamePasswordInput,
        @Ctx() { em }: MyContext
    ): Promise<UserResponse> {
        const username = get(options, 'username', '')
        const password = get(options, 'password', '')
        const hashedPassword = await argon2.hash(password)

        if (username.length <= 2) {
            return {
                errors: [
                    {
                        field: "username",
                        message: "LENGTH_MUST_BE_GREATER_THAN_TWO"
                    }
                ]
            }
        }

        if (username.length <= 2) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "LENGTH_MUST_BE_GREATER_THAN_TWO"
                    }
                ]
            }
        }

        let user;
        try {
            const result =  await (em as EntityManager).createQueryBuilder(User)
            .getKnexQuery()
            .insert({
                username,
                password: hashedPassword,
                created_at: new Date(),
                updated_at: new Date()
            })
            .returning("*")
            user = result[0]
        } catch(error) {
            if (error.code = '23505' || error.detail.includes("already exists")) {
                return {
                    errors: [
                        {
                            field: "username",
                            message: "USERNAME_ALREADY_TAKEN"
                        }
                    ]
                }
            }
        }
        return { user }
    }

    @Mutation(() => UserResponse)
    async login(
        @Arg('options') options: UsernamePasswordInput,
        @Ctx() { em, req }: MyContext
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

        req.session.userId =  user.id

        return { user }
    }
}