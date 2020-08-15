const mongoose = require('mongoose')
const { isEmail } = require('validator')

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'PLEASE_ENTER_AN_EMAIL'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'PLEASE_ENTER_A_VALID_EMAIL']
    },
    password: {
        type: String,
        required: [true, 'PLEASE_ENTER_AN_PASSWORD'],
        minlength: [6, 'MINIMUM_PASSWORD_LENGTH_IS_SIX_CHARACTERS']
    }
})

const Model = mongoose.model('user', schema)
module.exports = Model