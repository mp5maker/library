const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    first: {
        type: String
    },
    last: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    }
})


const Model = mongoose.model('user', schema)
module.exports = Model