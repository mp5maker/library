require("dotenv-safe").config({
  allowEmptyValues: true,
});
const elasticsearch = require('elasticsearch')

const client = new elasticsearch.Client({
  hosts: [
    `http://${process.env.ELASTICSEARCH_USERNAME}:${process.env.ELASTICSEARCH_PASSWORD}@${process.env.ELASTICSEARCH_SERVER}:${process.env.ELASTICSEARCH_PORT}`,
  ],
});

module.exports = client