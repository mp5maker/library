var mongo = require('mongodb');
var client = mongo.MongoClient;
var url = "mongodb://localhost:27017/";
var newUrlParser = { useNewUrlParser: true };

exports.config = {
    mongo, client, url, newUrlParser
}