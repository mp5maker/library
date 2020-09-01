const connect = require('connect')
const http = require('http')
const serveStatic = require('serve-static')
const fs = require('fs')
const morgan = require('morgan')
const url = require('url')
const bodyParser = require('body-parser')
const formidable = require('formidable');

const app = connect()

/* HTMLS */
app.use(serveStatic(`${__dirname}/website`))

/* STATICS */
app.use('/public', serveStatic(`${__dirname}/public`, { maxAge: 100, allow: true }))

/* LOG */
app.use(function(request, response, next) {
    console.log(request.url)
    next()
})

/* PARSE */
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'))

/* SERVE/GET */
app.use(function(request, response, next) {
    if (request.url == '/' && request.method == 'GET') {
        const query = url.parse(request.url, true).query
        console.log("query", query)
        response.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(`${__dirname}/website/index.html`).pipe(response)
    }
    next()
})

/* POST */
app.use(function(request, response, next) {
    if (request.url == '/' && request.method == 'POST') {
        response.writeHead(200, {'Content-Type': 'text/html' })
        form = new formidable.IncomingForm();
        form.parse(request, function (err, fields, files) {
            var oldpath = files.document.path;
            var newpath =  `${__dirname}/public/${files.document.name}`;
            fs.copyFile(oldpath, newpath, function (err) {
                if (err) throw err;
                response.write('File uploaded and moved!');
                response.end();
            });
        });
    } else {
        response.writeHead(404)
        response.end('Not Found')
    }
})


const server = http.createServer(app)
server.listen(3000)