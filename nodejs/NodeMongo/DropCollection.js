var settings = require('./Settings');
const { client, url, newUrlParser } = settings.config;

client.connect(url, newUrlParser, (error, db) => {
    if (error) throw error;
    var databaseObject = db.db('nodejs_mongo');
    databaseObject.collection('customers').drop((error, results) => {
        if (error) throw error;
        console.log(results);
        db.close();
    });
    databaseObject.dropCollection("customers", function (error, delOK) {
        if (error) throw error;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});