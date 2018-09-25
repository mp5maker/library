# GraphQL #
1) Rest API
2) JSON

#### What is GraphQL ####
1) Application layer query language
2) Open sourced by Facebook in 2015
3) Can be used with any type of database
4) Ability to ask for exactly what we need and nothing more
5) Get multiple resources in a single request

**Simple GraphQL Code**
```json
    {
        user(id:"100") {
            name,
            email,
            posts{
                title
            }
        }
    }
```
6. GraphQl APIS are organized in terms of types and fields
7. GraphiQL Tool
    * Graphical Interactiv GraphQl IDE
    * Runs in the browser
    * Syntax Highlighting
    * Error Reporting 
    * Autmation & Hinting
8. Python, PHP and Javascript 
9. Few Terminologies related to graphQL
    * Type
    * Query
    * Mutation
    * Resolve
    * Subscription
    * Schema

**Most Common Types**

1. *GraphQLObjectType*: Each field in the object will have its own type
2. *GraphQLID*: ID for a particular record
3. *GraphQLInt*: Integer
4. *GraphQLFloat*: Float
5. *GraphQLString*: String
6. *GraphQLList*: Array
7. *GraphQLNonNull*: Required Field

**Query**
* It is a like GET Request
* Everytime we will want to access the data for reading
* Query doesn't fetch data. It acts as a proxy

**Mutation**
* It is used when we want to manipulate the data
* This is used for CREATE, UPDATE, DELETE

**Resolve**
* Used for fetching and manipulating the data

**Subscription**
* They are like queries, but everytime the data changes.
* The query is run and new response is sent back to all connected clients.

**Schema**
* We connect all the above concepts together
* RootQuery: We specify all the queries we have written
* RootMutation: We specify all the mutations we have written
* We return GraphQLSchema with this query and mutation object

### Installation ### 
```bash
    npm install express --save
    npm install nodemon -g
    npm install graphql
    npm install express-graphql
```

### Start the Nodemon Server ###
```bash
    nodemon
```

#### Explanation ####
1. Use Express to create a server
2. Nodemon listens to any change in the file in the directory, it automatically restarts the server
3. Express out of box do not understands graphQL, it needs to express-graphql to do so
4. Schema tells how the data is structured