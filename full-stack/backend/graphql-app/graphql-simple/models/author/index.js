import mongoose from 'mongoose'

const Schema  = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    age: String,
    books: Array
})

export default mongoose.model('Author', AuthorSchema)