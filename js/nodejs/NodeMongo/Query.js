var settings = require('./Settings');
const { client, url, newUrlParser } = settings.config;

client.connect(url, newUrlParser, (error, db) => {
    if (error) throw error;
    var databaseObject = db.db('nodejs_mongo');
    var query = {
        "address": "Park Lane 38"
    }
    // Query
    databaseObject.collection('customers').find(query).toArray((error, results) => {
        if (error) throw error;
        console.log(results);
        db.close();
    });
    // Regular Expression
    var query = { address: /^S/ };
    databaseObject.collection("customers").find(query).toArray(function (error, result) {
        if (error) throw err;
        console.log(result);
        db.close();
    });
});