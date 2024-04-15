const express = require("express");
const fs = require("node:fs");
const utils = require("node:util");
const axios = require("axios");
const path = require("node:path");

const app = express();
const fsStat = utils.promisify(fs.stat);

app.get("/", (_, response) => {
  response.json().status(200);
});

app.get("/video-url", async (request, response) => {
  const range = request.headers.range;
  if (!range) return response.status(400).send("Requires Range Header");

  const urlPath = "https://www.w3schools.com/html/mov_bbb.mp4";
  const imgResponse = await axios.get(urlPath, {
    responseType: "stream",
  });
  response.set("Content-Type", "video/mp4");
  response.set("Content-Disposition", "inline");
  imgResponse.data.pipe(response);
});

app.get("/video", async (request, response) => {
  const range = request.headers.range;
  if (!range) return response.status(400).send("Requires Range Header");

  const filePath = path.join(__dirname, "..", "static", "mov_bbb.mp4");
  const data = await fsStat(filePath);
  const videoSize = data.size;
  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };
  response.writeHead(206, headers);
  const videoStream = fs.createReadStream(filePath, { start, end });
  videoStream.pipe(response);
});

app.listen(4000, () => {
  console.log("Listenin on port 4000");
});
