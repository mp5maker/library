import {
    GraphQLID,
    GraphQLString,
    GraphQLInt,

    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
} from 'graphql'

import Book from '@models/book'
import Author from '@models/author'


const BookType = new GraphQLObjectType({
    name: `Book`,
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve: (parent, args) => {
                // const authorId = get(parent, 'authorId', '')
                // if (authorId) return find(authors, { id: authorId })
                // return {}
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: `Author`,
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve: (parent, args) => {
                // const authorId = get(parent, 'id', '')
                // if (authorId) return books.filter((item) => item.authorId == authorId)
                // return {}
            }
        }
    })
})

const Query = new GraphQLObjectType({
    name: `Query`,
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                // const id = get(args, 'id', '')
                // if (id) return find(books, { id })
                // return {}
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID }},
            resolve: (parent, args) => {
                // const id = get(args, 'id', '')
                // if (id) return find(authors, { id })
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve: (parent, args) => {
                // return [...books]
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve: (parent, args) => {
                // return [...authors]
            }
        },
    }
})


const Mutation = new GraphQLObjectType({
    name: `Mutation`,
    fields: {
        addBook: {
            type: BookType,
            args: {
                name: {
                    type: GraphQLString
                },
                genre: {
                    type: GraphQLString
                },
                authorId: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                })
                return book.save()
            }
        },
        addAuthor: {
            type: AuthorType,
            args: {
                name: {
                    type: GraphQLString,
                },
                age: {
                    type: GraphQLInt
                }
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age
                })
                return author.save()
            }
        }
    }
})


export const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
})