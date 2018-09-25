const app = require('express')();
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js')

app.listen(3000, function() {
    console.log('Listening on port 3000!');
});

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
}));