const express = require("express");
const { v4 } = require('uuid');
const get = require("lodash/get");
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

const posts = {};

app.get("/posts", (_request, response) => {
  response.status(200).json(posts);
});

app.post("/posts", (request, response) => {
  const id = v4();
  const body = get(request, "body", {});
  const title = get(body, "title", "");
  posts[id] = {
    id,
    title,
  };
  response.status(201).json(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening to 4000");
});
