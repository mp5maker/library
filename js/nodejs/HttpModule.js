var http = require('http');
var url = require('url');

// http://localhost:8080/?year=2017&month=July
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    console.log(request.url) // /?year=2017&month=July
    console.log(url.parse(request.url).query) // year=2017&month=July
    const query = url.parse(request.url, true).query // { year: '2017', month: 'July' }
    response.write(`Year: ${query.year}, Month: ${query.month}`);
    response.end();
}).listen(8080);