const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const PORT = process.env.PORT || 3000;

/**
 * Use Express Js for server side routing and custome routing
 * When the page is reload, it will show 404 but using express it will handle the server side rendering properly
 */
app.prepare()
.then(() => {
    const server = express();

    // Custom Handling
    server.get("/post/:id", (request, response) => {
        const actualPage = "/post";
        const queryParams = { id: request.params.id };
        app.render(request, response, actualPage, queryParams);
    });

    server.get("/batman-tv-shows/:id", (request, response) => {
        const actualPage = "/batman-tv-shows";
        const queryParams = { id: request.params.id };
        app.render(request, response, actualPage, queryParams);
    });

    // Handle Requests
    server.get('*', (request, response) => {
        return handle(request, response)
    });

    // Listen
    server.listen(PORT, (error) => {
        if (error) throw error;
        console.log('> Ready on http://localhost:3000');
    });

})
.catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
})