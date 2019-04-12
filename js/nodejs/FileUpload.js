var formidable = require('formidable');
var http = require('http');
var fs = require('fs');
var path = require('path');

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
            console.log(path.resolve(__dirname))
            var form = new formidable.IncomingForm();
            form.parse(request, (error, fields, files) => {
                var oldpath = files.fileupload.path;
                var newpath = "images/" + files.fileupload.name;
                fs.rename(oldpath, newpath, (error) => {
                    if (error) throw error;
                })
            })
            response.writeHead(302, { 'Location': '/' });
            response.end();
        }
    }
}).listen(8081);