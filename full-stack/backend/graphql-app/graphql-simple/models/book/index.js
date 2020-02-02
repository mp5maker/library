import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    author: String
})

export default mongoose.model('Book', bookSchema)