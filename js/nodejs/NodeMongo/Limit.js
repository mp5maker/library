var settings = require('./Settings');
const { client, url, newUrlParser } = settings.config;

client.connect(url, newUrlParser, (error, db) => {
    if (error) throw error;
    var databaseObject = db.db('nodejs_mongo');
    databaseObject.collection('customers').find().skip(3).limit(5).toArray((error, results) => {
        if (error) throw error;
        console.log(results);
        db.close();
    });
});