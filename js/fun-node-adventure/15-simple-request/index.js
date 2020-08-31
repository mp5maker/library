const http = require('http')
const url = require('url')

const server = http.createServer((request, response) => {
    const search = url.parse(request.url, true).search
    const path = url.parse(request.url, true).pathname
    if (path == '/') {
        const onSuccess = (onSuccessResponse) => {
            let body = '';
            onSuccessResponse.setEncoding('utf-8')
            onSuccessResponse.on('data', (chunk) => body += chunk)
            onSuccessResponse.on('end', function(_results) {
                response.setHeader('Content-Type', 'application/json');
                response.end(body)
            })
        }

        http.request(`http://heroku-fake-rest-api.herokuapp.com/posts/${search}`, {}, onSuccess).end()
    }
})

server.listen(3000, () => console.log(`connected`))