const express = require("express");
const { v4 } = require('uuid');
const get = require("lodash/get");
const app = express();
const cors = require('cors')
const axios = require('axios');

app.use(express.json());
app.use(cors());

const posts = {};

app.get("/posts", (_request, response) => {
  response.status(200).json(posts);
});

app.post("/posts", async (request, response) => {
  const id = v4();
  const body = get(request, "body", {});
  const title = get(body, "title", "");
  const newPost ={
    id,
    title,
  }
  posts[id] = newPost
  try {
    await axios.post('http://localhost:4005/events', {
      type: 'PostCreated',
      data: newPost
    })
    response.status(201).json(posts[id]);
  } catch (error) {
    console.debug(error)
  }
});

app.post('/events', (request, response) => {
  console.log('Received Event', get(request, 'body.type', ''))
  response.send({})
})

app.listen(4000, () => {
  console.log("Listening to 4000");
});
