var settings = require('./Settings');
const { client, url, newUrlParser } = settings.config;

client.connect(url, newUrlParser, (error, db) => {
    if (error) throw error;
    var databaseObject = db.db('nodejs_mongo');
    var query = { address: 'Mountain 21' };
    databaseObject.collection('customers').deleteOne(query,(error, results) => {
        if (error) throw error;
        console.log(results);
        db.close();
    });
    var query = { address: /^O/ };
    databaseObject.collection('customers').deleteMany(query,(error, results) => {
        if (error) throw error;
        console.log(results);
        db.close();
    });
});