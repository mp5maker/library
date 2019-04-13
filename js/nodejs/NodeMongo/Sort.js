var settings = require('./Settings');
const { client, url, newUrlParser } = settings.config;

client.connect(url, newUrlParser, (error, db) => {
    if (error) throw error;
    var databaseObject = db.db('nodejs_mongo');
    // Ascending Order
    var sort = {
        "name": 1
    }
    databaseObject.collection('customers').find().sort(sort).toArray((error, results) => {
        if (error) throw error;
        console.log(results);
        db.close();
    });
    // Descending Order
    var sort = {
        "name": -1
    }
    databaseObject.collection('customers').find().sort(sort).toArray((error, results) => {
        if (error) throw error;
        console.log(results);
        db.close();
    });
});