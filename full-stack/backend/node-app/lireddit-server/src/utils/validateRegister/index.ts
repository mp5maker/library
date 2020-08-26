import get from 'lodash/get'
import { UsernamePasswordInput } from "../../resolvers/UsernamePasswordInput"

export const validateRegister = (options: UsernamePasswordInput) => {
    const username = get(options, 'username', '')
    const email = get(options, 'email', '')
    const password = get(options, 'password', '')

    if (!email.includes('@')) {
        return [
            {
                field: "email",
                message: "INVALID_EMAIL"
            }
        ]
    }

    if (username.length <= 2) {
        return [
            {
                field: "username",
                message: "LENGTH_MUST_BE_GREATER_THAN_TWO"
            }
        ]
    }

    if (password.length <= 2) {
        return [
            {
                field: "password",
                message: "LENGTH_MUST_BE_GREATER_THAN_TWO"
            }
        ]
    }

    if (username.includes('@')) {
        return [
            {
                field: "username",
                message: "CANNOT_INCLUDE_AN_@"
            }
        ]
    }

    return null
}