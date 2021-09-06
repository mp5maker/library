var mongo = require('mongodb');
var client = mongo.MongoClient;
var url = "mongodb://localhost:27017/";

client.connect(url, { useNewUrlParser: true }, (error, db) => {
    if (error) throw error;
    var databaseObject = db.db('nodejs_mongo');
    var customer = { name: "Company Inc", address: "Highway 37" };
    databaseObject.collection('customers').insertOne(customer, (error, result) => {
        if (error) throw error;
        console.log(result);
        db.close();
    })
})