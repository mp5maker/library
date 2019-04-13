var settings = require('./Settings');
const { client, url, newUrlParser } = settings.config;

client.connect(url, newUrlParser, (error, db) => {
    if (error) throw error;
    var databaseObject = db.db('nodejs_mongo');
    // Find One
    databaseObject.collection('customers').findOne({}, (error, results) => {
        if (error) throw error;
        console.log(results);
        db.close();
    });
    // Find All
    databaseObject.collection('customers').find({}).toArray((error, result) => {
        if (error) throw error;
        console.log(result);
        db.close();
    });
    // Projections
    var projection = {
        projection: {
            _id: 0, name: 1, address: 1
        }
    }
    databaseObject.collection('customers').find({}, projection).toArray((error, result) => {
        if (error) throw error;
        console.log(result);
        db.close();
    });
});