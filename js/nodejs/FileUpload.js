var formidable = require('formidable');
var http = require('http');
var fs = require('fs');

http.createServer((request, response) => {
    var routes = {
        form: {
            location: '/',
            file: "html/form.html"
        },
        upload: {
            location: '/upload',
        }
    }
    if (request.url) {
        if (request.url == routes.form.location) {
            fs.readFile(routes.form.file, function(error, data) {
                response.writeHead(200, { "Content-Type" : "text/html" });
                response.write(data);
                response.end();
            })
        }
        if (request.url == routes.upload.location) {
            var form = new formidable.IncomingForm();
            form.parse(request, (error, fields, files) => {
                var oldpath = files.filetoupload.path;
                var newpath = "html/" + files.filetoupload.name;
                fs.rename(oldpath, newpath, (error) => {
                    if (error) throw error;
                })
            })
            response.writeHead(302, { 'Location': '/' });
            response.end();
        }
    }
}).listen(8081);