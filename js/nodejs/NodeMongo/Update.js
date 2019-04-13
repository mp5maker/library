var settings = require('./Settings');
const { client, url, newUrlParser } = settings.config;

client.connect(url, newUrlParser, (error, db) => {
    if (error) throw error;
    var databaseObject = db.db('nodejs_mongo');
    var myquery = { address: "Valley 345" };
    var newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };
    databaseObject.collection('customers').updateOne(myquery, newvalues, (error, results) => {
        if (error) throw error;
        console.log(results);
        db.close();
    });
    var myquery = { address: /^S/ };
    var newvalues = { $set: { name: "Minnie" } };
    databaseObject.collection("customers").updateMany(myquery, newvalues, function (error, res) {
        if (error) throw error;
        console.log(res.result.nModified + " document(s) updated");
        db.close();
    });
});