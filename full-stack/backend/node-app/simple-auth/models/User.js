const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

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

/* Fire a function after doc saved to db */
schema.post('save', function(doc, next) {
    console.log('new user was created & saved', doc)
    next()
})

/* Fire a function before doc saved to db */
schema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

const Model = mongoose.model('user', schema)
module.exports = Model