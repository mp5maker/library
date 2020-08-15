const User = require('../models/User')
const get = require('lodash/get')

/* Handle Errors */
const handleErrors = (error) => {
    if (error.code === 11000) return { email: `EMAIL_ALREADY_EXIST` }
    if (error.message.includes('user validation failed')) {
        return Object.values(error.errors).reduce((errorObj, err) => {
            const path = get(err, 'path', '')
            const message = get(err, 'message', '')
            return {
                ...errorObj,
                [path]: message
            }
        }, {})
    }
}

module.exports.signup_get = (request, response) => {
    response.render('signup')
}

module.exports.login_get = (request, response) => {
    response.render('login')
}

module.exports.signup_post = async (request, response) => {
    const { email, password } = request.body
    try {
        const user = await User.create({ email, password })
        response.status(201).json(user)
    } catch (error) {
        const errors = handleErrors(error)
        response.status(400).json({ errors })
    }
}

module.exports.login_post = (request, response) => {
    const { email, password } = request.body
    response.send('user login')
}