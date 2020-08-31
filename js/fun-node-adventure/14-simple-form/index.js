const http = require('http')
const qs = require('querystring')

const server = http.createServer(function(request, response) {
    if (request.url == '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end(`
            <form method="POST" action="/url">
                <h1> My Form </h1>
                <fieldset>
                    <label>
                        Personal Information
                    </label>
                    <p>
                        What is your name ?
                    </p>
                    <input type="text" name="name">
                    <p>
                        <button>
                            Submit
                        </button>
                    </p>
                </fieldset>
            </form>
        `)
    } else if (request.url == '/url' && request.method == 'POST') {
        // response.writeHead(200, { 'Content-Type': 'text/html '})
        // response.end(`You send a <em> ${request.method} </em> request`)
        let body = ''
        request.on('data', function(chunk) {
            body += chunk
        })
        request.on('end', function() {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.end(`
                <p>
                    Content-Type ${request.headers['content-type']}
                </p>
                <p>
                    Data:
                </p>
                <pre>
                    ${qs.parse(body).name}
                </pre>
            `)
        })
    } else {
        response.writeHead(404)
        response.end('Not Found')
    }
})

server.listen(3000, function() {
    console.log('connected')
})