const express = require("express");
const axios = require("axios");
const get = require("lodash/get");
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

app.post("/events", (request, response) => {
  const event = get(request, "body", {});
  axios
    .post("http://localhost:4000/events", event)
    .then(() => {})
    .catch(() => {});
  axios
    .post("http://localhost:4001/events", event)
    .then(() => {})
    .catch(() => {});
  axios
    .post("http://localhost:4002/events", event)
    .then(() => {})
    .catch(() => {});

  response.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
