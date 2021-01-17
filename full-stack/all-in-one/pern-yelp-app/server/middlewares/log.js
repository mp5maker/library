const router = require('express').Router()
const elasticSearchClient = require('../elasticsearch')

router.use((request, _response, next) => {
  elasticSearchClient.index({
    index: 'logs',
    body: {
      url: request.url,
      method: request.method
    }
  }).then((response) => console.log(response))
  .catch((error) => console.log(error))

  next()
})

module.exports = router