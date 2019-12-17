import gql from 'graphql-tag';
import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { GraphQLDate, GraphQLDateTime, GraphQLTime } from 'graphql-iso-date';

const port = process.env.PORT || 8080;

// Define APIs using GraphQL SDL
const typeDefs = gql`
    scalar Date
    scalar Time
    scalar DateTime

    type Query {
        sayHello(name: String!): String!
        getLocalStorage(key: String!): String!
    }

    type Mutation {
        sayHello(name: String!): String!
    }
`;

// Define resolvers map for API definitions in SDL
const resolvers = {
    Date: GraphQLDate,
    Time: GraphQLTime,
    DateTime: GraphQLDateTime,

    Query: {
        sayHello: (obj, args, context, info) => {
            return `Hello ${args.name}!`;
        },
        getLocalStorage: (obj, args, context, info) => {
            return window.localStorage(args.key);
        },
    },

    Mutation: {
        sayHello: (obj, args, context, info) => {
            return `Hello ${args.name}!`;
        }
    }
};

// Configure express
const app = express();

// Build GraphQL schema based on SDL definitions and resolvers maps
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Build Apollo server
const apolloServer = new ApolloServer({ schema });
apolloServer.applyMiddleware({ app });

// Run server
app.listen({ port }, () => {
    console.log(`🚀Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
});