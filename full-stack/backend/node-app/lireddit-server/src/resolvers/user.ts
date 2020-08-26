import { Resolver, Arg, Field, Mutation, Ctx, ObjectType, Query } from 'type-graphql'
import get from 'lodash/get'
import argon2 from 'argon2'
import { EntityManager } from '@mikro-orm/postgresql'

import { MyContext } from 'src/types'
import { User } from '../entities/User'
import { COOKIE_NAME } from '../constants'
import { UsernamePasswordInput } from './UsernamePasswordInput'
import { validateRegister } from '../utils/validateRegister'

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
    // @Mutation(() => Boolean)
    // async forgotPassword(
    //     @Arg('email') email: string,
    //     @Ctx() { req }: MyContext
    // ) {
    //     const user = await email.findOne(User, { email })
    // }


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
        const email = get(options, 'email', '')
        const password = get(options, 'password', '')
        const hashedPassword = await argon2.hash(password)

        const errors = validateRegister(options)
        if (errors) return { errors }

        let user;
        try {
            const result =  await (em as EntityManager).createQueryBuilder(User)
            .getKnexQuery()
            .insert({
                username,
                email,
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
        @Arg('usernameOrEmail') usernameOrEmail: string,
        @Arg('password') password: string,
        @Ctx() { em, req }: MyContext
    ): Promise<UserResponse> {
        const hashedPassword = await argon2.hash(password)

        const user = await em.findOne(
            User,
            usernameOrEmail.includes('@')
                ? { email: usernameOrEmail }
                : { username: usernameOrEmail }
        )

        if (!user) {
            return {
                errors: [
                    {
                        field: 'usernameOrEmail',
                        message: "USERNAME_OR_EMAIL_DO_NOT_EXIST"
                    }
                ]
            }
        }

        if (!password) {
            return {
                errors: [
                    {
                        field: 'password',
                        message: "PASSWORD_CANNOT_BE_EMPTY"
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

    @Mutation(() => Boolean)
    logout(
        @Ctx() { req, res }: MyContext
    ) {
        return new Promise((resolve) => {
            req.session.destroy((error) => {
                res.clearCookie(COOKIE_NAME)
                if (error) {
                    console.log(error)
                    resolve(false)
                    return
                }
                resolve(true)
            })
        })
    }
}