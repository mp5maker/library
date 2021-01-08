const express = require("express");
const path = require("path");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Assets
app.use(express.static(path.join(__dirname, "static")));

// Listen
app.listen(4000, () => {
  console.log("Listening to 4000");
});
