const graphql = require('graphql');
const { 
    GraphQLObjectType, 
    GraphQLSchema,
    GraphQLString, 
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} = graphql;

// Hardcoded Data
const customers = [
    {
        id: "1",
        name: "John Doe",
        email: "john.doe@gmail.com",
        age: 35
    },
    {
        id: "2",
        name: "Sarah Williams",
        email: "sarah.william@gmail.com",
        age: 27
    },
    {
        id: "3",
        name: "Bob Smith",
        email: "bob.smith@gmail.com",
        age: 17
    }
];

// Customer Type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: function() {
        return {
            id: {type: GraphQLInt},
            name: {type: GraphQLString},
            email: {type: GraphQLString},
            age: {type: GraphQLInt}
        }
    }
})

// RootQuery
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: function() {
        return {
            customer: {
                type:CustomerType,
                args: {
                    id:{type: GraphQLInt},
                },
                resolve(parentValue, args) {
                    for(let i = 0; i < customers.length; i++) {
                        if(customers[i].id == args.id) {
                            return customers[i];
                        }
                    }
                }
            },
            // Dumps all the data
            customers: {
                type: new GraphQLList(CustomerType),
                resolve(parentValue, args) {
                    return customers;
                }
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});

// Will show the data of the customers
// {
//     customer(id: 3) {
//         name,
//             email,
//             age
//     }
// }