const express = require("express");
const { v4 } = require("uuid");
const get = require("lodash/get");
const app = express();

app.use(express.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (request, response) => {
  response.status(200).json(get(commentsByPostId, request.params.id, []));
});

app.post("/posts/:id/comments", (request, response) => {
  const commentId = v4()
  const postId = get(request, 'params.id', '')
  const body = get(request, 'body', {})
  const content = get(body, 'content', '')
  const comments = get(commentsByPostId, postId, [])
  const comment = { id: commentId, content }
  comments.push(comment)
  commentsByPostId[postId] = comments
  return response.status(201).json(comment)
});

app.listen(4001, () => {
  console.log("Listening to 4001");
});
