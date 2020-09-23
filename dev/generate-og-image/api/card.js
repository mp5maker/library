const { parse } = require('url')
const getHtml = require('./getHtml')

module.exports = async (req, res) => {
    try {
        const { query = {} } = parse(req.url || "", true)
        const { author, title, website, image } = query
        if (Array.isArray(author)) throw new Error('Author must be a string')
        if (Array.isArray(website)) throw new Error('Website must be a string')
        if (Array.isArray(title)) throw new Error('Title must be a string')
        if (Array.isArray(image)) throw new Error('Image must be a string')

        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.end(getHtml(query))
    } catch(error) {
        res.statusCode = 500
        res.setHeader("Content-Type", "text/html")
        res.end("<h1> Internal Error </h1><p> Sorry, an error occurred.</p>");
        console.error(error)
    }
};
