// exports.handler = function(event, context, callback) {
//     const { name } = JSON.parse(event.body)

//     callback(null, {
//         statusCode: 200,
//         body: JSON.stringify(`Hello ${name}`)
//     })
// }
const axios = require('axios')

exports.handler = function(event, context, callback) {
    const URL = "https://jsonplaceholder.typicode.com/posts";

    /* Send User Response */
    const send = (body) => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(body)
        })
    }

    /* Perform API call */
    const getPosts = () => {
        axios.get(URL)
            .then((response) => send(response.data))
            .catch((error) => send(error))
    }

    /* Make sure method is GET */
    if (event.httpMethod == 'GET') getPosts();
}