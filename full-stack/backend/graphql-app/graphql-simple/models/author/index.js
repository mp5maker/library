import mongoose from 'mongoose'

const Schema  = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    age: String,
})

export default mongoose.model('Author', AuthorSchema)