const http = require('http')
const url = require('url')
const fs = require('fs')


const GET = 'GET'
const POST = 'POST'
const IMAGES = "/images"
const JPG = ".jpg"
const ROOT = "/"


const serve = (path, type, response) => {
    response.writeHead(200, { 'Content-Type': type })
    fs.createReadStream(path).pipe(response)
}

const server = http.createServer(function(request, response) {
    const requestURL = url.parse(request.url, true).pathname
    if (request.method == GET && requestURL.substr(0, 7) == IMAGES && requestURL.substr(-4) == JPG) {
        fs.stat(`${__dirname}${requestURL}`, function(error, stat) {
            if (!stat.isFile() || error) {
                response.writeHead(404)
                response.end('Not Found')
                return
            }
            serve(`${__dirname}${requestURL}`, 'application/jpg', response)
        })
    } else if (request.method == GET && requestURL == ROOT) {
        serve(`${__dirname}/index.html`, 'text/html', response)
    } else {
        response.writeHead(404)
        response.end('Not Found')
    }
})

server.listen(3000, () => console.log('connected'))