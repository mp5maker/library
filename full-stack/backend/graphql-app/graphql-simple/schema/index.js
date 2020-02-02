import {
    GraphQLID,
    GraphQLList,
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql'
import get from 'lodash/get'
import find from 'lodash/find'

/* Dummy Data */
const books =  [
    { name: `Name of the Wind`, genre: `Fantasy`, id: `1`, authorId: `1` },
    { name: `The Final Empire`, genre: `Fantasy`, id: `2`, authorId: `2` },
    { name: `The Long Earth`, genre: `Sci-Fi`, id: `3`, authorId: `3` },
    { name: `The Hero of Ages`, genre: `Fantasy`, id: `4`, authorId: `2`},
    { name: `The Colour of Magic`, genre: `Fantasy`, id: `5`, authorId: `3`},
    { name: `The Light Fantastic`, genre: `Fantasy`, id: `6`, authorId: `3`}
]

const authors = [
    { name: `Patrick Rothfuss`, age: 44, id: `1`},
    { name: `Brandom Sanderson`, age: 42, id: `2`},
    { name: `Terry Pratchett`, age: 66, id: `3`},
]

const BookType = new GraphQLObjectType({
    name: `Book`,
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve: (parent, args) => {
                const authorId = get(parent, 'authorId', '')
                if (authorId) return find(authors, { id: authorId })
                return {}
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: `Author`,
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLString },
        books: {
            type: new GraphQLList(BookType),
            resolve: (parent, args) => {
                const authorId = get(parent, 'id', '')
                if (authorId) return books.filter((item) => item.authorId == authorId)
                return {}
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: `RootQueryType`,
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                const id = get(args, 'id', '')
                if (id) return find(books, { id })
                return {}
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID }},
            resolve: (parent, args) => {
                const id = get(args, 'id', '')
                if (id) return find(authors, { id })
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve: (parent, args) => {
                return [...books]
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve: (parent, args) => {
                return [...authors]
            }
        },
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery
})