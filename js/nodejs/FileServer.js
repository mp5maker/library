var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer((request, response) => {
    const routes = {
        home: "/",
        about: "/about",
        contact: "/contact"
    }
    if (request.url) {
        const { type } = url.parse(request.url, true).query;
        var fileLocation;
        console.log(type)
        switch(request.url) {
            case routes.home:
                fileLocation = "html/index.html";
                break;
            case routes.about:
                fileLocation = "html/about.html";
            break;
            case routes.contact:
                fileLocation = "html/contact.html";
                break;
            default:
                fileLocation = "html/index.html";
            break;
        }
    }
    fs.readFile(fileLocation, (error, data) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
    })
}).listen(8080);
