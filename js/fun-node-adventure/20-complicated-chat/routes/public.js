const { Router } = require('express')

const router = Router()

router.use('/', function(_request, response) {
    response.sendFile(`${__dirname}/static/index.html`)
})

router.use('/admin', function(_request, response) {
    response.sendFile(`${__dirname}/static/index.html`)
})

module.exports = router