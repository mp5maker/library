const express = require('express')
const cors = require('cors')
const { v4 } = require('uuid')
const get = require('lodash/get')

const app = express()

app.use(express.json())
app.use(cors())

const posts = {}

app.get('/posts', (request, response) => {
  response.status(200).json(posts)
})

app.post('/events', (request, response) => {
  const body = get(request, 'body', {})
  const type = get(body, 'type', '')
  console.log("Query Events", type)

  if (type === 'PostCreated') {
    const { id, title } = get(body, 'data', {})
    posts[id] = {
      id,
      title,
      comments: []
    }
  }
  if (type === 'CommentCreated') {
    const { id, content, postId } = get(body, 'data', {})
    const post = posts[postId]
    console.log("🚀 ~ file: index.js ~ line 33 ~ app.post ~ post", post)
    post.comments.push({ id, content })
    posts[postId] = post
  }

  response.status(200).send(posts)
})

app.listen(4002, () => console.log('start at 4002'))