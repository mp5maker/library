import { Resolver, Arg, Field, Mutation, Ctx, ObjectType, Query, FieldResolver, Root } from 'type-graphql'
import get from 'lodash/get'
import argon2 from 'argon2'

import { MyContext } from 'src/types'
import { User } from '../entities/User'
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from '../constants'
import { UsernamePasswordInput } from './UsernamePasswordInput'
import { validateRegister } from '../utils/validateRegister'
import { sendEmail } from '../utils/sendEmail'
import { v4 } from 'uuid'
import { getConnection } from 'typeorm'

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

@Resolver(User)
export class UserResolver {
    @FieldResolver(() => String)
    email(@Root() user: User, @Ctx() { req }: MyContext) {
        if (req.session.userId === user.id) return user.email
        return ""
    }

    @Mutation(() => UserResponse)
    async changePassword(
        @Arg('token') token: string,
        @Arg('newPassword') newPassword: string,
        @Ctx() { redis, req }: MyContext
    ): Promise<UserResponse> {
        if (newPassword.length <= 2) {
            return {
                errors: [
                    {
                        field: "newPassword",
                        message: "LENGTH_MUST_BE_GREATER_THAN_TWO"
                    }
                ]
            }
        }

        const key = `${FORGET_PASSWORD_PREFIX}${token}`
        const userId = await redis.get(key)
        if (!userId) {
            return {
                errors: [
                    {
                        field: "token",
                        message: "TOKEN_EXPIRED"
                    }
                ]
            }
        }

        const userIdNum = parseInt(userId)
        const user: any = await User.findOne(userIdNum)
        if (!user) {
            return {
                errors: [
                    {
                        field: "token",
                        message: "USER_NO_LONGER_EXISTS"
                    }
                ]
            }
        }
        const hashedPassword = await argon2.hash(newPassword)
        await User.update({ id: userIdNum }, { password: hashedPassword })
        await redis.del(key)
        req.session.userId = user.id
        return { user }
    }


    @Mutation(() => Boolean)
    async forgotPassword(
        @Arg('email') email: string,
        @Ctx() { redis }: MyContext
    ) {
        const user = await User.findOne({ where: { email }})
        /* Do not let the user know whether this email exist or not */
        if (!user) return true
        const token = v4()
        await redis.set(`${FORGET_PASSWORD_PREFIX}${token}`, user.id, 'ex', 1000 * 60 * 60 * 24 * 3)
        const anchoreTag = `<a href="http://localhost:3000/change-password/${token}">Reset Password</a>`
        await sendEmail(email, anchoreTag)
        return true
    }


    @Query(() => User, { nullable: true })
    async me(@Ctx() { req }: MyContext) {
        if (!req.session.userId) return null
        return User.findOne(req.session.userId)
    }


    @Mutation(() => UserResponse)
    async register(
        @Arg('options') options: UsernamePasswordInput,
    ): Promise<UserResponse> {
        const username = get(options, 'username', '')
        const email = get(options, 'email', '')
        const password = get(options, 'password', '')
        const hashedPassword = await argon2.hash(password)

        const errors = validateRegister(options)
        if (errors) return { errors }

        let user: any;
        try {
            /* User.create({ username, email, password }).save() */
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(User)
                .values({
                    username,
                    email,
                    password: hashedPassword,
                })
                .returning("*")
                .execute()
            user = result.raw[0]
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
        @Ctx() { req }: MyContext
    ): Promise<UserResponse> {
        const hashedPassword = await argon2.hash(password)

        const user = await User.findOne(
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