const express = require("express");
const { v4 } = require("uuid");
const get = require("lodash/get");
const app = express();
const cors = require('cors')
const axios = require('axios')

app.use(express.json());
app.use(cors())

const commentsByPostId = {};

app.get("/posts/:id/comments", (request, response) => {
  response.status(200).json(get(commentsByPostId, request.params.id, []));
});

app.post("/posts/:id/comments", async (request, response) => {
  const commentId = v4()
  const postId = get(request, 'params.id', '')
  const body = get(request, 'body', {})
  const content = get(body, 'content', '')
  const comments = get(commentsByPostId, postId, [])
  const comment = { id: commentId, content }
  comments.push(comment)
  commentsByPostId[postId] = comments
  try {
    await axios.post('http://localhost:4002/events', {
      type: 'CommentCreated',
      data: {
        ...comment,
        postId
      }
    })
    return response.status(201).json(comment)
  } catch(error) {
    console.log(error)
  }
});

app.post("/events", (request, response) => {
  console.log("Comment Event:", get(request, "body.type", ""));
  response.send({});
});

app.listen(4001, () => {
  console.log("Listening to 4001");
});
